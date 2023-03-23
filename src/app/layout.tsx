import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "산체스의 넥스트 스터디",
  description: "산체스의 넥스트 스터디를 담은 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div>
            <h1>Sanchez&apos;s Next Study</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/products/pants">Product</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
