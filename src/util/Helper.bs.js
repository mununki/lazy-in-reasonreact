'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function compute(t) {
  if (t === "") {
    return "";
  } else {
    return Belt_Array.reduce(Belt_Array.make(100000000, 0), "", (function (param, param$1) {
                  return t.toUpperCase();
                }));
  }
}

exports.compute = compute;
/* No side effect */
