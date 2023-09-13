import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 w-full border-b flex items-center justify-between px-2 sticky top-0 bg-transparent backdrop-blur-md">
      <Link href="/" className="">
        Logo
      </Link>

      <nav className="">
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/merch">Merch</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-2"></div>
    </header>
  );
}
