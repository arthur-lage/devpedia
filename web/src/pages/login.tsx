import { GithubLogo } from "phosphor-react";
import { Header } from "../components/Header";
import { SignInButton } from "../components/SignInButton";

import Image from "next/image";

import ReadingCode from "../assets/reading-code.svg";
import Head from "next/head";

export default function Login() {
  const REDIRECT_URL = "http://localhost:3000";
  const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user`;

  return (
    <>
      <Head>
        <title>Login - Devpedia</title>
      </Head>
      <div className="flex flex-col">
        <Header />

        <main className="mt-12 flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-6 text-center text-slate-900 font-source-code-pro font-bold uppercase">
            Login
          </h1>
          <p className="text-zinc-700 text-xl text-lato font-medium text-center w-[27.5rem]">
            In order to contribute to the app adding more words and definitions,
            you will need to sign in with GitHub.
          </p>

          <Image
            className="w-[13rem] my-8"
            src={ReadingCode}
            alt="Person looking at code in a computer screen."
          />

          <SignInButton
            className="flex border-2 border-zinc-500 items-center gap-3 px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-md transition-all duration-150"
            inApp={false}
            href={AUTH_URL}
          >
            <GithubLogo className="text-4xl text-white" />
            <span className="text-white font-medium font-source-code-pro text-lg">
              Sign In
            </span>
          </SignInButton>
        </main>
      </div>
    </>
  );
}
