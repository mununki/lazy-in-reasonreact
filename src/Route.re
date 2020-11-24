type t =
  | Example
  | MemoExample
  | LazyExample
  | SuspenseExample
  | LazyCompExample;

let fromUrl = (url: ReasonReactRouter.url) => {
  switch (url.path) {
  | [] => Example->Some
  | ["memo"] => MemoExample->Some
  | ["lazy"] => LazyExample->Some
  | ["suspense"] => SuspenseExample->Some
  | ["lazy-component"] => LazyCompExample->Some
  | _ => None
  };
};
