import { GithubLogo } from "phosphor-react";
import { Header } from "../components/Header";
import { SignInButton } from "../components/SignInButton";

export default function Login() {
  const REDIRECT_URL = "http://localhost:3000";
  const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user`;

  return (
    <div className="flex flex-col">
      <Header />

      <main>
        <h1>Login</h1>
        <p>
          In order to contribute to the app adding more words and definitions,
          you will need to sign in with GitHub.
        </p>
        <SignInButton inApp={false} href={AUTH_URL}>
          <GithubLogo />
          Sign In
        </SignInButton>
      </main>
    </div>
  );
}
