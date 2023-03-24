import Link from "next/link";
import React from "react";
import { getProducts } from "../api/products";

export const metadata = {
  title: "Product",
  description: "산체스의 넥스트 스터디의 상품페이지입니다",
};

export default async function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts();
  return (
    <div className="flex justify-center">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
