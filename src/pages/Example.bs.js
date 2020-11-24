'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Helper$FirstReasonReact = require("../util/Helper.bs.js");
var Styles$FirstReasonReact = require("../components/Styles.bs.js");

function Example(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setRequiredText = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setText = match$1[1];
  var handleOnChageRequired = function (e) {
    e.stopPropagation();
    e.preventDefault();
    var value = e.target.value;
    return Curry._1(setRequiredText, (function (param) {
                  return value;
                }));
  };
  var handleOnChage = function (e) {
    e.stopPropagation();
    e.preventDefault();
    var value = e.target.value;
    return Curry._1(setText, (function (param) {
                  return value;
                }));
  };
  var upperText = Helper$FirstReasonReact.compute(match$1[0]);
  return React.createElement("div", {
              className: Styles$FirstReasonReact.Example.container
            }, React.createElement("h3", {
                  className: Styles$FirstReasonReact.Example.title
                }, "Example"), React.createElement("p", undefined, match[0]), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "required",
                  type: "text",
                  onChange: handleOnChageRequired
                }), React.createElement("p", undefined, upperText), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "memoized",
                  type: "text",
                  onChange: handleOnChage
                }));
}

var make = Example;

exports.make = make;
/* react Not a pure module */
