'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var CamlinternalLazy = require("bs-platform/lib/js/camlinternalLazy.js");
var Helper$FirstReasonReact = require("../util/Helper.bs.js");
var Styles$FirstReasonReact = require("../components/Styles.bs.js");

var lazyUpperText = {
  LAZY_DONE: false,
  VAL: (function () {
      return Helper$FirstReasonReact.compute("I'm just lazy");
    })
};

function LazyExample(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setRequiredText = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setText = match$1[1];
  var match$2 = React.useState(function () {
        return false;
      });
  var setChecked = match$2[1];
  var checked = match$2[0];
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
  var handleOnCheck = function (e) {
    return Curry._1(setChecked, e.target.checked);
  };
  return React.createElement("div", {
              className: Styles$FirstReasonReact.Example.container
            }, React.createElement("h3", {
                  className: Styles$FirstReasonReact.Example.title
                }, "Example - Lazy"), React.createElement("p", undefined, match[0]), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "required",
                  type: "text",
                  onChange: handleAnotherOnChage
                }), checked ? CamlinternalLazy.force(lazyUpperText) : null, React.createElement("label", undefined, React.createElement("input", {
                      checked: checked,
                      type: "checkbox",
                      onChange: handleOnCheck
                    }), " show"), React.createElement("input", {
                  className: Styles$FirstReasonReact.Example.input,
                  placeholder: "memoized",
                  type: "text",
                  onChange: handleOnChage
                }));
}

var make = LazyExample;

exports.lazyUpperText = lazyUpperText;
exports.make = make;
/* react Not a pure module */
