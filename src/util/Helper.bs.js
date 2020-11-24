'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function compute(t) {
  if (t === "") {
    return "";
  } else {
    return Belt_Array.reduce(Belt_Array.make(100000000, t), "", (function (acc, item) {
                  if (acc === item) {
                    return acc;
                  } else {
                    return item.toUpperCase();
                  }
                }));
  }
}

exports.compute = compute;
/* No side effect */
