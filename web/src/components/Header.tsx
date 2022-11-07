import Link from "next/link";
import { SignInButton } from "./SignInButton";
import { useAuth } from "../hooks/useAuth";
import { GithubLogo } from "phosphor-react";

export function Header() {
  const { currentUser, logout } = useAuth();

  return (
    <header className="px-20 py-5 border-b-2 border-b-[rgba(0,0,0,0.2)] flex items-center justify-between">
      <Link
        className="transition-all duration-150 hover:text-pinkish-red-900 font-bold font-source-code-pro text-2xl text-zinc-900"
        href="/"
      >
        &#123; devpedia &#125;
      </Link>

      <nav>
        <ul className="flex items-center gap-8">
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
          <li>
            {currentUser ? (
              <div className="flex items-center gap-8">
                <p className="text-base font-medium font-lato">Signed in as: &nbsp; <b className="text-slate-800 font-source-code-pro">{currentUser.name}</b></p>
                <button className="text-base px-2 py-1 border-2 border-pinkish-red-900 text-pinkish-red-900 rounded-md bg-pinkish-red-100 hover:text-white hover:bg-pinkish-red-900 transition-all duration-150 font-bold font-source-code-pro" onClick={logout}>Logout</button>
              </div>
            ) : (
              <SignInButton
                className="flex border-2 border-zinc-500 items-center gap-2 px-2 py-1 bg-zinc-900 hover:bg-zinc-700 rounded-md transition-all duration-150"
                inApp={true}
                href={"/login"}
              >
                <GithubLogo className="text-3xl text-white" />
                <span className="text-white font-medium font-source-code-pro text-base">
                  Sign In
                </span>
              </SignInButton>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
