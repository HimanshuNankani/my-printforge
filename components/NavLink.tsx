"use client";

import { NavLinkProp } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children, exact }: NavLinkProp) {
  const pathname = usePathname();
  const linkColor = (exact ? pathname === href : pathname.startsWith(href))
    ? "text-orange-400"
    : "text-gray-700";

  return (
    <li className="text-sm uppercase">
      <Link
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 ${linkColor}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
