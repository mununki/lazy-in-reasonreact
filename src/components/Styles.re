module Common = {
  open CssJs;
  let globalReset = () => {
    global(.
      "*",
      [|
        margin(`zero),
        padding(`zero),
        boxSizing(`borderBox),
        border(px(0), `none, transparent),
        listStyleType(`none),
        textDecoration(`none),
        fontFamilies([|`custom("Noto Sans KR"), `sansSerif|]),
        selector("h1, h2, h3, h4, h5, h6", [|fontWeight(bold)|]),
      |],
    );
    global(.
      "button",
      [|background(`transparent), cursor(`pointer), outlineStyle(`none)|],
    );
    global(.
      "a, a:link, a:visited, a:hover, a:active",
      [|textDecoration(`none)|],
    );
  };
};

module Example = {
  open CssJs;
  let container =
    style(. [|
      height(vh(100.0)),
      display(`flex),
      flexDirection(`column),
      justifyContent(`center),
      alignItems(`center),
    |]);
  let title = style(. [|marginBottom(px(32))|]);
  let input =
    style(. [|
      padding(px(8)),
      backgroundColor(hex("EEEEEE")),
      border(px(1), `solid, hex("DDDDDD")),
      marginBottom(px(16)),
      [|marginBottom(px(0))|]->lastOfType,
    |]);
};
