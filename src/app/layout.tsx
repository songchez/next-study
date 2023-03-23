import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

//head.js가 없어지고 오지는 SEO를 위한 metadata가 생겼다!!!!
//쉽게 동적메타데이타도 만들어 볼 수 있다!
export const metadata = {
  title: {
    default: "산체스의 넥스트 스터디",
    template: "산체스의 넥스트 스터디 | %s",
  },
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
