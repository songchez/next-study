import path from "path";
import { promises as fs } from "fs";

export interface Product {
  id: string;
  name: string;
  price: string;
  url: string;
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}

// export async function GET(request: Request) {
//     return new Response("Hello, Next.js!");
//   }
