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
      <div className="flex justify-center text-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-7xl">
          {posts.map((post: any) => (
            <div key={post._id}>
              <Link href={`/${post._id}`}>
                <div className="card bg-base-100 shadow-xl hover:translate-y-1 max-w-md h-[412px]">
                  <figure className="bg-contain overflow-hidden h-44">
                    <Image
                      alt={post._id}
                      src={urlFor(post.mainImage).url()}
                      width={500}
                      height={500}
                      className="w-fit"
                    />
                  </figure>
                  <div className="card-body overflow-hidden">
                    <h3 className="font-semibold text-left card-title">
                      {post.title}
                    </h3>
                    <p className="text-ellipsis text-gray-500 ">
                      {post.body[0].children[0].text}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
