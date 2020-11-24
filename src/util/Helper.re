let compute = t =>
  // 입력값이 없을 때는 비싼 연산을 하지 않게
  if (t == "") {
    "";
  } else {
    let result =
      Belt.Array.make(100000000, t)
      ->Belt.Array.reduce("", (acc, item) => {
          acc == item ? acc : item->Js.String2.toUpperCase
        });
    result;
  };
