import { client } from "@/util/SanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import HeartIcon from "/public/icon_heart.svg";
import { randomInt } from "crypto";
import { Post } from "@/types/AboutPost";
import { getAuthorData } from "@/app/api/blogData";
import ImageBuilder from "./ImageBuilder";

export default async function ArticleCard({ post }: { post: Post }) {
  const author = await getAuthorData({ author_id: post.author._ref });
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
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
            <h3 className="font-semibold text-left card-title">{post.title}</h3>
            <p className="text-ellipsis text-gray-500 ">
              {post.body[0].children[0].text}
            </p>
            <span className="text-left text-sm">
              {CreatedAt({ createdAt: post._createdAt })} • {randomInt(500)}
              개의 댓글
            </span>
            <div className="py-px bg-base"></div>

            <div className="flex justify-between">
              <div>
                <Image
                  src={ImageBuilder({ mainImage: author.image })}
                  alt="authorImage"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <span>{author.name}</span>
              <Image src={HeartIcon} alt="hearticon"></Image>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
