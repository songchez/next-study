import { client } from "@/util/SanityClient";

export async function getPostData() {
  const posts = await client.fetch(`*[_type == "post"]`);
  if (posts === null) {
    throw new Error("데이터를 가져오는데 실패!");
  }
  return posts;
}

export async function getPost(id: string) {
  const posts = await getPostData();
  return posts.find((post: any) => post._id === id);
}
