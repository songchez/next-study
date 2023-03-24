import Counter from "@/components/Counter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HOME</h1>
      <Counter></Counter>
    </main>
  );
}
