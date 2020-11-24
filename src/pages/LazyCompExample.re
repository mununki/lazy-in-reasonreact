let expensiveComponent = lazy(<Expensive />);

[@react.component]
let make = () => {
  let (requiredText, setRequiredText) = React.useState(_ => "");
  let (text, setText) = React.useState(_ => "");
  let (checked, setChecked) = React.useState(_ => false);

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
  let handleOnCheck = e => {
    let value = e->ReactEvent.Synthetic.target##checked;
    setChecked(value);
  };

  <div className=Styles.Example.container>
    <h3 className=Styles.Example.title>
      {j|Example - Lazy React Component|j}->React.string
    </h3>
    <p> requiredText->React.string </p>
    <input
      type_="text"
      onChange=handleAnotherOnChage
      className=Styles.Example.input
      placeholder="required"
    />
    {checked ? Lazy.force(expensiveComponent) : React.null}
    <label>
      <input type_="checkbox" checked onChange=handleOnCheck />
      {j| show|j}->React.string
    </label>
    <input
      type_="text"
      onChange=handleOnChage
      className=Styles.Example.input
      placeholder="memoized"
    />
  </div>;
};
