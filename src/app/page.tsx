import ArticleCard from "@/components/ArticleCard";
import { getAuthorData, getPostData } from "./api/blogData";

export default async function Home() {
  const posts = await getPostData();

  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-center items-center text-center mt-28 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-5xl">
          {posts.map(async (post: any) => {
            const author = await getAuthorData({ author_id: post.author._ref });
            return <ArticleCard post={post} author={author} key={post._id} />;
          })}
        </div>
      </div>
    </main>
  );
}
