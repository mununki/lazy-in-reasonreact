'use strict';

var React = require("react");
var Router$FirstReasonReact = require("./Router.bs.js");
var Example$FirstReasonReact = require("./pages/Example.bs.js");
var LazyExample$FirstReasonReact = require("./pages/LazyExample.bs.js");
var MemoExample$FirstReasonReact = require("./pages/MemoExample.bs.js");
var LazyCompExample$FirstReasonReact = require("./pages/LazyCompExample.bs.js");
var SuspenseExample$FirstReasonReact = require("./pages/SuspenseExample.bs.js");

function App(Props) {
  var route = Router$FirstReasonReact.useRouter(undefined);
  if (route === undefined) {
    return React.createElement(LazyExample$FirstReasonReact.make, {});
  }
  switch (route) {
    case /* Example */0 :
        return React.createElement(Example$FirstReasonReact.make, {});
    case /* MemoExample */1 :
        return React.createElement(MemoExample$FirstReasonReact.make, {});
    case /* LazyExample */2 :
        return React.createElement(LazyExample$FirstReasonReact.make, {});
    case /* SuspenseExample */3 :
        return React.createElement(SuspenseExample$FirstReasonReact.make, {});
    case /* LazyCompExample */4 :
        return React.createElement(LazyCompExample$FirstReasonReact.make, {});
    
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
