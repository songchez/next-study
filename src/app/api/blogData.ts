import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dkpx0jrt",
  dataset: "blog",
  apiVersion: "vX",
  useCdn: false,
});

export async function getPostData() {
  const posts = await client.fetch(`*[_type == "post"]`);
  if (posts === null) {
    throw new Error("데이터를 가져오는데 실패!");
  }
  return posts;
}
