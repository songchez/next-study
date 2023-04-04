import Image from "next/image";
import Link from "next/link";
import GithubIcon from "/public/icon_github.svg";
import InstagramIcon from "/public/icon_insta.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center mt-40 mb-10">
      <div>
        <div className="flex justify-center gap-2 p-3">
          <Link href="https://www.instagram.com/san.cheaz">
            <Image src={InstagramIcon} alt="instagram"></Image>
          </Link>
          <Link href="https://github.com/songchez">
            <Image src={GithubIcon} alt="github"></Image>
          </Link>
        </div>

        <h3 className="text-accent animate-pulse">
          Sanchez&apos; Nelog | All Right Reserved.
        </h3>
      </div>
    </footer>
  );
}
