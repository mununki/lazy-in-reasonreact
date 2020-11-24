[@react.component]
let make = () => {
  let (requiredText, setRequiredText) = React.useState(_ => "");
  let (text, setText) = React.useState(_ => "");

  let handleOnChageRequired = e => {
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

  // 값비싼 연산 중...
  let upperText = Helper.compute(text);

  <div className=Styles.Example.container>
    <h3 className=Styles.Example.title> {j|Example|j}->React.string </h3>
    <p> requiredText->React.string </p>
    <input
      type_="text"
      onChange=handleOnChageRequired
      className=Styles.Example.input
      placeholder="required"
    />
    <p> upperText->React.string </p>
    <input
      type_="text"
      onChange=handleOnChage
      className=Styles.Example.input
      placeholder="memoized"
    />
  </div>;
};
