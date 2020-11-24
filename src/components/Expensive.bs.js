'use strict';

var React = require("react");
var Helper$FirstReasonReact = require("../util/Helper.bs.js");

function Expensive(Props) {
  var upperText = Helper$FirstReasonReact.compute("I'm lazy");
  return React.createElement("div", undefined, upperText);
}

var make = Expensive;

var $$default = Expensive;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
