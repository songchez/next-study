"use client";
//클라이언트 컴포넌트는 이걸입력해야댐 일단 해 그리고 생각해

import { useState } from "react";

export default function Counter() {
  const [Number, setNumber] = useState(0);

  const plus = () => {
    setNumber((num) => num + 1);
    console.log("Client Component!!!!클라컴포");
    //클라이언트 컴포넌트는 정적으로 미리 SSR로 생성된다.
    //그 이후 Hydration을 통해서 맛있어진다.
  };

  return (
    <div>
      <h2>{Number}</h2>
      <button onClick={plus}>숫자증가맨이야</button>
    </div>
  );
}
