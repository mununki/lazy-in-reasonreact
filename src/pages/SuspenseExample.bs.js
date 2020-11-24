'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Styles$FirstReasonReact = require("../components/Styles.bs.js");
var ExpensiveLazy$FirstReasonReact = require("../components/ExpensiveLazy.bs.js");

function SuspenseExample(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setRequiredText = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setText = match$1[1];
  var handleAnotherOnChage = function (e) {
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
  return React.createElement("div", {
              className: Styles$FirstReasonReact.Example.container
            }, React.createElement("h3", {
                  className: Styles$FirstReasonReact.Example.title
                }, "Example - Suspense"), React.createElement("p", undefined, match[0]), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "required",
                  type: "text",
                  onChange: handleAnotherOnChage
                }), React.createElement(React.Suspense, {
                  children: React.createElement(ExpensiveLazy$FirstReasonReact.make, ExpensiveLazy$FirstReasonReact.makeProps(undefined, undefined)),
                  fallback: React.createElement("div", undefined, "loading...")
                }), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "memoized",
                  type: "text",
                  onChange: handleOnChage
                }));
}

var make = SuspenseExample;

exports.make = make;
/* react Not a pure module */
