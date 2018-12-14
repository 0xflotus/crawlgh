#!/usr/bin/env node

require("request")(
  `https://github.com/${process.argv[2] || "0xflotus"}`,
  (_, __, body) =>
    console.log(
      require("cheerio")
        .load(body)("h2.f4.text-normal.mb-2")
        .get(1)
        .children[0].data.trim()
    )
);
