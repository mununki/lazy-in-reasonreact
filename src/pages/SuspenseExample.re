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

  <div className=Styles.Example.container>
    <h3 className=Styles.Example.title>
      {j|Example - Suspense|j}->React.string
    </h3>
    <p> requiredText->React.string </p>
    <input
      type_="text"
      onChange=handleAnotherOnChage
      className=Styles.Example.input
      placeholder="required"
    />
    <React.Suspense fallback={<div> {j|loading...|j}->React.string </div>}>
      <ExpensiveLazy />
    </React.Suspense>
    <input
      type_="text"
      onChange=handleOnChage
      className=Styles.Example.input
      placeholder="memoized"
    />
  </div>;
};
