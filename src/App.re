[@react.component]
let make = () => {
  let route = Router.useRouter();
  switch (route) {
  | Some(Example) => <Example />
  | Some(MemoExample) => <MemoExample />
  | Some(LazyExample) => <LazyExample />
  | Some(SuspenseExample) => <SuspenseExample />
  | Some(LazyCompExample) => <LazyCompExample />
  | _ => <LazyExample />
  };
};
