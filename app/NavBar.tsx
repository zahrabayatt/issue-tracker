"use client";

import { cn } from "@/utils/tailwindUtils";
import { Box, Container, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="mb-5 border-b px-5 py-3">
      <Container>
        <Flex justify="between">
          <Box>
            <Flex align="center" gap="3">
              <Link href="/">
                <AiFillBug />
              </Link>
              <ul className="flex space-x-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "transition-colors hover:text-zinc-800",
                        link.href === currentPath
                          ? "text-zinc-800"
                          : "text-zinc-500",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Flex>
          </Box>
          <Box>
            {status === "loading" && <div>Loading...</div>}
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Logout</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
