import Counter from "@/components/Counter";

import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { getPostData } from "./api/blogData";
import { client } from "@/util/SanityClient";

export default async function Home() {
  const posts = await getPostData();
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <main>
      <div className="text-center mt-10">
        <div className="grid grid-cols-2 gap-4 justify-center p-3">
          {posts.map((post: any) => (
            <div key={post._id}>
              <Link href={`/${post._id}`}>
                <div className="container overflow-hidden m-3 bg-gray-50 rounded-lg h-72   w-80">
                  <div className="bg-contain overflow-hidden h-44">
                    <Image
                      alt={post._id}
                      src={urlFor(post.mainImage).url()}
                      width={200}
                      height={200}
                      className="w-fit"
                    />
                  </div>
                  <h3 className="p-2 font-semibold text-left">{post.title}</h3>
                  <p className="px-2 text-ellipsis text-gray-500">
                    {post.body[0].children[0].text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Counter></Counter>
      </div>
    </main>
  );
}
