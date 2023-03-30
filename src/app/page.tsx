import Counter from "@/components/Counter";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const client = createClient({
  projectId: "dkpx0jrt",
  dataset: "blog",
  apiVersion: "vX",
  useCdn: false,
});

export default async function Home() {
  const posts = await getPostData();
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <main>
      <div className="text-center mt-10">
        <h1>HOME</h1>
        <div className="flex justify-center">
          {posts.map((post: any) => (
            <div key={post._id}>
              <Link href="/">
                <Image
                  alt={post._id}
                  src={urlFor(post.mainImage).url()}
                  width={200}
                  height={200}
                />
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
        <Counter></Counter>
      </div>
    </main>
  );
}

async function getPostData() {
  const posts = await client.fetch(`*[_type == "post"]`);
  if (posts === null) {
    throw new Error("데이터를 가져오는데 실패!");
  }
  return posts;
}
