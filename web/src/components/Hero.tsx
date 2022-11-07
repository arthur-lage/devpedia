import Link from "next/link";
import { GithubLogo, MagnifyingGlass } from "phosphor-react";

export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2 font-source-code-pro font-bold text-3xl text-zinc-900">devpedia</h1>
      <p className="font-source-code-pro text-xl font-medium text-zinc-700">A dictionary for developers</p>

      <div className="my-10 w-[50vw] h-[2px] bg-purple-200"></div>

      <div className="flex items-center gap-3">
        <Link
          className="transition-all duration-150 flex items-center border-2 border-pinkish-red-900 text-pinkish-red-900 gap-3 text-lg text-lato font-medium bg-pinkish-red-100 hover:bg-pinkish-red-200 rounded-md px-4 py-2 cursor-pointer"
          href="/search"
        >
          <MagnifyingGlass weight="bold" className="text-3xl text-pinkish-red-900" />
          Search for words
        </Link>

        <a
          rel="noreferrer"
          target={"_blank"}
          className="border-2 border-zinc-500 transition-all duration-150 flex items-center gap-3 text-white text-lg text-lato font-medium bg-zinc-900 hover:bg-zinc-800 rounded-md px-4 py-2 cursor-pointer"
          href="https://github.com/arthur-lage/devpedia"
        >
          <GithubLogo className="text-zinc-600 text-3xl" />
          Project on GitHub
        </a>
      </div>
    </div>
  );
}
