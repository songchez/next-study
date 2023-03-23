import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-4">
      <div>
        <ul>
          <li>
            <Link href="/products/pants">Pants</Link>
          </li>
          <li>
            <Link href="/products/hello">Hello</Link>
          </li>
          <li>
            <Link href="/products/man">Man</Link>
          </li>
          <li>
            <Link href="/products/girl">Girl</Link>
          </li>
        </ul>
      </div>

      <div className="text-green">{children}</div>
    </div>
  );
}
