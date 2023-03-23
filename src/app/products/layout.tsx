import Link from "next/link";
import React from "react";

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
