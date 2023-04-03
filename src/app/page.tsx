import ArticleCard from "@/components/ArticleCard";
import { getPostData } from "./api/blogData";

export default async function Home() {
  const posts = await getPostData();
  return (
    <main>
      <div className="flex justify-center text-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 max-w-7xl">
          {posts.map((post: any) => (
            <ArticleCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </main>
  );
}
