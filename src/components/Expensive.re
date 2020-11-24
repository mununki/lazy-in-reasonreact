[@react.component]
let make = () => {
  let upperText = Helper.compute("I'm lazy");
  <div> upperText->React.string </div>;
};

let default = make;