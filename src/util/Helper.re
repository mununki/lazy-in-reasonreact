let compute = t =>
  // 입력값이 없을 때는 비싼 연산을 하지 않게
  if (t == "") {
    "";
  } else {
    let result =
      Belt.Array.make(100000000, 0)
      ->Belt.Array.reduce("", (_, _) => {t->Js.String2.toUpperCase});
    result;
  };
