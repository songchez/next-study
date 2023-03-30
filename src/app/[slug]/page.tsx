import Image from "next/image";
import { redirect } from "next/navigation";
import { getPost, getPostData } from "../api/blogData";
import ImageBuilder from "@/components/ImageBuilder";

type Props = {
  params: {
    slug: string;
  };
};
//기본적으로 [slug]는 주소창에쓴게(라우팅) params로 전달(props)된다.
//[...slug]라고 하면 파라미터가 있든없든 페이지 나오고, 배열도(중첩라우팅) 사용가능하다.

export default async function Slug({ params: { slug } }: Props) {
  const post = await getPost(slug);
  if (!post) {
    redirect("/");
    // notFound();
  }
  return (
    <div key={post._id}>
      <h1>{post.title}</h1>
      <Image
        src={ImageBuilder({ mainImage: post.mainImage })}
        alt={`Main image of${post.title}`}
        width={400}
        height={400}
        style={{ objectFit: "cover" }}
      />
      <div></div>
    </div>
  );
}

//원래 요청시 생성(Dynamic)되어야 하는데 미리 정적(Static)으로 생성해 놓는 함수
//상세페이지 만들때 쓰임.
//동적(ssr)으로 하느냐? 아니면 정적(ssg)으로 하느냐?
export async function generateStaticParams() {
  const posts = await getPostData();
  return posts.map((post: any) => ({ slug: post.id }));
}
