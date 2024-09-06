"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/">
        <Image
          alt="logo"
          src="/assets/images/logo-text.svg"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                width={32}
                height={32}
                src="/assets/icons/menu.svg"
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  width={152}
                  height={23}
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                />

                <ul className="header-nav_elements">
                  {navLinks.slice(0, 6).map((link) => {
                    const isActive: boolean = link.route === pathname;
                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } py-18 flex whitespace-nowrap text-dark-700`}
                        key={link.id}
                      >
                        <Link href={link.route} className="sidebar-link">
                          <Image
                            src={link.icon}
                            alt="sidebar logo"
                            width={24}
                            height={24}
                          />

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
