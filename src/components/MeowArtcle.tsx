"use client";

import { useEffect, useState, useTransition } from "react";
import cat from "/public/cat.svg";
import Image from "next/image";

//클라이언트 컴포넌트 state를 가지는 데이타. 정적으로 가져오지 않음.
export default function Meow() {
  const [text, setText] = useState("...");
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    getCata();
    setOpacity("opacity-1");
  }, []);

  const getCata = () => {
    setOpacity("opacity-0");

    setTimeout(async () => {
      await fetch("https://meowfacts.herokuapp.com/", {})
        .then((res) => res.json())
        .then((data) => setText(data.data[0]));

      setOpacity("opacity-1");
    }, 500);
  };

  return (
    <div className="grid gap-6 w-auto p-5 bg-neutral text-neutral-50 rounded-2xl">
      <div className="flex justify-between">
        <h3 className="text-xl pb-4 font-bold">The Facts of Cats</h3>
        <button onClick={getCata}>
          <Image src={cat} alt="catbutton"></Image>
        </button>
      </div>
      <article
        className={`text-lg text-ellipsis font-semibold transition-opacity duration-500 ease-in-out ${opacity}`}
      >
        {text}
      </article>
    </div>
  );
}
