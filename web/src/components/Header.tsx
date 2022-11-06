import Link from "next/link";

export function Header() {
  return (
    <header className="px-20 py-5 border-b-2 border-b-[rgba(0,0,0,0.2)] flex items-center justify-between">
      <Link
        className="transition-all duration-150 hover:text-pinkish-red-900 font-bold font-source-code-pro text-2xl text-zinc-900"
        href="/"
      >
        &#123; devpedia &#125;
      </Link>

      <nav>
        <ul className="flex items-center gap-16">
          <li>
            <Link className="header-link" href="/search">
              Search
            </Link>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              className="header-link"
              href="https://github.com/arthur-lage/devpedia"
            >
              GitHub
            </a>
          </li>
          <li>
            <Link className="header-link" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
