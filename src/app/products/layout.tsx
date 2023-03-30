import Link from "next/link";
import React from "react";
import { getProducts } from "../api/products";
import Meow from "@/components/MeowArtcle";

export const metadata = {
  title: "Product",
  description: "산체스의 넥스트 스터디의 상품페이지입니다",
};

//ISR. 몇초간격으로 랜더링 할래?????
// export const revalidate = 4; -> 밑에 객체형태로 집어넣음.

export default async function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-center m-5 text-blue gap-4">
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>

        {children}
        <div className="p-8">
          <h3 className="text-orange-700">The Facts of Cats</h3>
          <Meow></Meow>
        </div>
      </div>
    </>
  );
}
