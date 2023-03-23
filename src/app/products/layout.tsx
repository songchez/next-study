import Link from "next/link";
import React from "react";

export const metadata = {
  title: "product",
  description: "산체스의 넥스트 스터디의 상품페이지입니다",
};

const products = ["pants", "skirts", "shoes", "shirt"];
export default function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
