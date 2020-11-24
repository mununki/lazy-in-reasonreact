[@bs.val]
external importComponent:
  ([@bs.ignore] (Js.t('a) => React.element), string) =>
  Js.Promise.t(Js.t('a) => React.element) =
  "import";

[@bs.module "react"]
external lazy_: (unit => Js.Promise.t('a)) => 'a = "lazy";

module type T = (module type of Expensive);

let unsafePlaceholder: module T = [%raw {|{}|}];

module UnsafePlaceholder = (val unsafePlaceholder);

let makeProps = UnsafePlaceholder.makeProps;
let make = lazy_(_ => importComponent(UnsafePlaceholder.make, "./Expensive.bs.js"));