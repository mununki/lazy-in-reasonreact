[%raw {|require("./assets/css/font.css")|}];

Styles.Common.globalReset();
switch (ReactDOM.querySelector("#app")) {
| Some(root) => ReactDOMRe.render(<App />, root)
| None => ()
};
