'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");

function globalReset(param) {
  CssJs.$$global("*", [
        CssJs.margin("zero"),
        CssJs.padding("zero"),
        CssJs.boxSizing("borderBox"),
        CssJs.border(CssJs.px(0), "none", CssJs.transparent),
        CssJs.listStyleType("none"),
        CssJs.textDecoration("none"),
        CssJs.fontFamilies([
              {
                NAME: "custom",
                VAL: "Noto Sans KR"
              },
              "sansSerif"
            ]),
        CssJs.selector("h1, h2, h3, h4, h5, h6", [CssJs.fontWeight(CssJs.bold)])
      ]);
  CssJs.$$global("button", [
        CssJs.background("transparent"),
        CssJs.cursor("pointer"),
        CssJs.outlineStyle("none")
      ]);
  return CssJs.$$global("a, a:link, a:visited, a:hover, a:active", [CssJs.textDecoration("none")]);
}

var Common = {
  globalReset: globalReset
};

var container = CssJs.style([
      CssJs.height(CssJs.vh(100.0)),
      CssJs.display("flex"),
      CssJs.flexDirection("column"),
      CssJs.justifyContent("center"),
      CssJs.alignItems("center")
    ]);

var title = CssJs.style([CssJs.marginBottom(CssJs.px(32))]);

var input = CssJs.style([
      CssJs.padding(CssJs.px(8)),
      CssJs.backgroundColor(CssJs.hex("EEEEEE")),
      CssJs.border(CssJs.px(1), "solid", CssJs.hex("DDDDDD")),
      CssJs.marginBottom(CssJs.px(16)),
      CssJs.lastOfType([CssJs.marginBottom(CssJs.px(0))])
    ]);

var Example = {
  container: container,
  title: title,
  input: input
};

exports.Common = Common;
exports.Example = Example;
/* container Not a pure module */
