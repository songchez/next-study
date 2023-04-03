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
    <div className="flex justify-center">
      <div className="container max-w-4xl">
        <div className="p-8">
          <Meow></Meow>
        </div>
        <div className="tabs justify-center">
          {products.map((product, index) => (
            <Link href={`/products/${product.id}`} key={index}>
              <div className="text-xl font-bold tab tab-lg tab-lifted">
                {product.name}
              </div>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
