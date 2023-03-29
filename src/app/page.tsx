import Counter from "@/components/Counter";
import { createClient } from "next-sanity";

export default function Home({ params: { posts } }: any) {
  return (
    <main>
      <div className="text-center mt-10">
        <h1>HOME</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post._id}>{post.name}</li>
          ))}
        </ul>
        <Counter></Counter>
      </div>
    </main>
  );
}

const client = createClient({
  projectId: "dkpx0jrt",
  dataset: "blog",
  apiVersion: "vX",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
