"use client";

import { useEffect, useState } from "react";

//클라이언트 컴포넌트 state를 가지는 데이타. 정적으로 가져오지 않음.
export default function Meow() {
  const [text, setText] = useState("...데이터 준비중");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/", {
      next: { revalidate: 3 },
      //cache: 'no-store'
    })
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className="text-3xl text-orange">{text}</article>;
}
