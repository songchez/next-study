import Counter from "@/components/Counter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="text-center mt-10">
        <h1>HOME</h1>
        <Counter></Counter>
      </div>
    </main>
  );
}
