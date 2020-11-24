'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var unsafePlaceholder = {};

function makeProps(prim, prim$1) {
  var tmp = {};
  if (prim !== undefined) {
    tmp.key = Caml_option.valFromOption(prim);
  }
  return tmp;
}

var make = React.lazy(function (param) {
      return import("./Expensive.bs.js");
    });

var UnsafePlaceholder = unsafePlaceholder;

exports.unsafePlaceholder = unsafePlaceholder;
exports.UnsafePlaceholder = UnsafePlaceholder;
exports.makeProps = makeProps;
exports.make = make;
/* make Not a pure module */
