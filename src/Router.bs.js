'use strict';

var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Route$FirstReasonReact = require("./Route.bs.js");

function useRouter(param) {
  return Route$FirstReasonReact.fromUrl(ReasonReactRouter.useUrl(undefined, undefined));
}

exports.useRouter = useRouter;
/* ReasonReactRouter Not a pure module */
