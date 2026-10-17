#!/usr/bin/env python3
"""Focused deployed-route and integration checks; never submits an order or form."""
import argparse
import json
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.parse import urljoin
from urllib.request import urlopen


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = set()
        self.assets = set()
        self.noindex = False
        self.forms = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "a":
            self.links.add(a.get("href", ""))
        if tag == "form":
            self.forms += 1
        if tag in ("img", "script") and a.get("src", "").startswith("/"):
            self.assets.add(a["src"])
        if tag == "link" and a.get("href", "").startswith("/"):
            self.assets.add(a["href"])
        if tag == "meta" and a.get("name") == "robots":
            self.noindex = "noindex" in a.get("content", "")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("base")
    parser.add_argument("--revision", required=True)
    args = parser.parse_args()
    base = args.base.rstrip("/") + "/"
    routes = ["/", "/menu/", "/catering/", "/about/", "/visit/"]
    all_links, assets = set(), set()
    for route in routes:
        with urlopen(urljoin(base, route), timeout=20) as response:
            assert response.status == 200, route
            page = Page()
            page.feed(response.read().decode())
            assert page.noindex, f"{route}: noindex absent"
            assert not page.forms, f"{route}: unexpected local form"
            assert set(routes).issubset(page.links), f"{route}: primary page link absent"
            all_links |= page.links
            assets |= page.assets
        print(f"PASS direct route {route}")
    for path in sorted(assets):
        with urlopen(urljoin(base, path), timeout=20) as response:
            assert response.status == 200, path
    for link in ("tel:+14106689212", "https://order.chownow.com/order/5108/locations/6625", "https://squareup.com/gift/9K1R5WDH8FYKR/check-balance"):
        assert link in all_links, f"Integration link absent: {link}"
    assert any("google.com/maps/" in link for link in all_links), "Directions link absent"
    with urlopen(urljoin(base, "version.json"), timeout=20) as response:
        assert json.load(response)["revision"] == args.revision
        assert "no-store" in response.headers.get("Cache-Control", "")
    with urlopen(urljoin(base, "health"), timeout=20) as response:
        assert response.status == 200
    try:
        urlopen(urljoin(base, "nonexistent-route-smoke-test/"), timeout=20)
        raise AssertionError("Missing route must return HTTP 404")
    except HTTPError as error:
        assert error.code == 404
    print(f"PASS {len(assets)} local assets, external link targets, health, revision and 404")


if __name__ == "__main__":
    main()
