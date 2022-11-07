import Link from "next/link";
import { LinkHTMLAttributes, ReactNode } from "react";

interface SignInButtonProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  inApp: boolean;
  children: ReactNode
}

export function SignInButton({ inApp, href, children, ...rest }: SignInButtonProps) {
  return (
    <>
      {inApp ? (
        <Link {...rest} href={href}>{children}</Link>
      ) : (
        <a {...rest} href={href}>{children}</a>
      )}
    </>
  );
}
