import Link from "next/link";
import React from "react";
import { PiBugFill } from "react-icons/pi";

const NavBar = () => {
  const linkItems = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugFill fontSize="30px" />
      </Link>
      <ul className="flex space-x-6">
        {linkItems.map((item) => (
          <li key={item.href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
