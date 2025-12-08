"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "./types";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive && "active" || ""}
    >
      {children}
    </Link>
  );
}
