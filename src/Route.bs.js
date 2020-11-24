'use strict';


function fromUrl(url) {
  var match = url.path;
  if (!match) {
    return /* Example */0;
  }
  switch (match.hd) {
    case "lazy" :
        if (match.tl) {
          return ;
        } else {
          return /* LazyExample */2;
        }
    case "lazy-component" :
        if (match.tl) {
          return ;
        } else {
          return /* LazyCompExample */4;
        }
    case "memo" :
        if (match.tl) {
          return ;
        } else {
          return /* MemoExample */1;
        }
    case "suspense" :
        if (match.tl) {
          return ;
        } else {
          return /* SuspenseExample */3;
        }
    default:
      return ;
  }
}

exports.fromUrl = fromUrl;
/* No side effect */
