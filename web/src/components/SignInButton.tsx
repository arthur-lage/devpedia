import Link from "next/link";
import { ReactNode } from "react";

interface SignInButtonProps {
  href: string;
  inApp: boolean;
  children: ReactNode
}

export function SignInButton({ inApp, href, children }: SignInButtonProps) {
  return (
    <>
      {inApp ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href}>{children}</a>
      )}
    </>
  );
}
