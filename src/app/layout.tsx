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
    <html lang="ko" className={open_Sans.className}>
      <body>
        <div className="p-1 sm:p-5">
          <header>
            <div className="flex justify-between p-5">
              <Link href="/">
                <h1 className="text-xl text-primary">
                  {metadata.title.default}
                </h1>
              </Link>
              {/* PC */}
              <nav className="hidden sm:grid grid-flow-col gap-4 pt-2">
                <Link href="/">Article</Link>
                <Link href="/products/0001">Product</Link>
                <Link href="/about">About</Link>
              </nav>
              {/* 모바일 */}
              <div className="dropdown sm:hidden">
                <label
                  tabIndex={0}
                  className="btn m-1 bg-base text-primary hover:bg-primary/60 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base rounded-box w-52"
                >
                  <li>
                    <Link href="/">Article</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/products/0001">Product</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
