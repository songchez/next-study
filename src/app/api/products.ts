export function getProducts() {
  return ["pants", "skirts", "shoes", "shirt"];
}
export function getProduct(id: string) {
  return `item: ${id}`;
}

// export async function GET(request: Request) {
//     return new Response("Hello, Next.js!");
//   }
