"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { AiFillBug } from "react-icons/ai";

import classNames from "classnames";

const LINKS = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {LINKS.map((link, linkIndex) => (
          <li key={linkIndex}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
