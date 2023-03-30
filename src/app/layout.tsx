import Link from "next/link";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

//head.js가 없어지고 오지는 SEO를 위한 metadata가 생겼다!!!!
//쉽게 동적메타데이타도 만들어 볼 수 있다!
export const metadata = {
  title: {
    default: "Sanchez's Nelog",
    template: "Sanchez's Nelog | %s",
  },
  description: "산체스의 넥스트 스터디를 담은 갠댄한 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={open_Sans.className}>
      <body>
        <header>
          <div className="flex justify-between p-5">
            <Link href="/">
              <h1 className="text-xl text-emerald-500">Sanchez&apos;s Nelog</h1>
            </Link>
            <nav className="grid grid-flow-col gap-2 pt-2">
              <Link href="/">Home</Link>
              <Link href="/products/0001">Product</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
