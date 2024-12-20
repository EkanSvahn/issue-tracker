"use client";
import Link from "next/link";
import React from "react";
import { PiBugFill } from "react-icons/pi";
import classNames from "classnames";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const currentPath = usePathname();

  const linkItems = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues/list",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugFill fontSize="30px" />
      </Link>
      <ul className="flex space-x-6">
        {linkItems.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
