"use client";
import Link from "next/link";
import React from "react";
import { PiBugFill } from "react-icons/pi";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Spinner from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

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
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <PiBugFill fontSize="30px" />
            </Link>
            <ul className="flex space-x-6">
              {linkItems.map((link) => (
                <li key={link.href}>
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
          </Flex>
          <Flex align="center">
            <Box>
              {status === "loading" && <Text>Loading...</Text>}
              {status === "unauthenticated" && (
                <Link
                  href="/api/auth/signin"
                  className="text-blue-500 hover:underline"
                >
                  Sign In
                </Link>
              )}
              {status === "authenticated" && (
                <Link
                  href="/api/auth/signout"
                  className="text-red-500 hover:underline"
                >
                  Logout
                </Link>
              )}
            </Box>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
