'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$FirstReasonReact = require("./App.bs.js");
var Styles$FirstReasonReact = require("./components/Styles.bs.js");

((require("./assets/css/font.css")));

Styles$FirstReasonReact.Common.globalReset(undefined);

var root = document.querySelector("#app");

if (!(root == null)) {
  ReactDom.render(React.createElement(App$FirstReasonReact.make, {}), root);
}

/*  Not a pure module */
