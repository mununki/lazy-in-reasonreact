[@react.component]
let make = () => {
  let (requiredText, setRequiredText) = React.useState(_ => "");
  let (text, setText) = React.useState(_ => "");

  let handleAnotherOnChage = e => {
    e->ReactEvent.Synthetic.stopPropagation;
    e->ReactEvent.Synthetic.preventDefault;
    let value = e->ReactEvent.Synthetic.target##value;
    setRequiredText(_ => value);
  };
  let handleOnChage = e => {
    e->ReactEvent.Synthetic.stopPropagation;
    e->ReactEvent.Synthetic.preventDefault;
    let value = e->ReactEvent.Synthetic.target##value;
    setText(_ => value);
  };

  // React.useMemo 사용
  let memoizedUpperText =
    React.useMemo1(_ => Helper.compute(text), [|text|]);

  <div className=Styles.Example.container>
    <h3 className=Styles.Example.title>
      {j|Example - useMemo|j}->React.string
    </h3>
    <p> requiredText->React.string </p>
    <input
      type_="text"
      onChange=handleAnotherOnChage
      className=Styles.Example.input
      placeholder="required"
    />
    <p> memoizedUpperText->React.string </p>
    <input
      type_="text"
      onChange=handleOnChage
      className=Styles.Example.input
      placeholder="memoized"
    />
  </div>;
};
