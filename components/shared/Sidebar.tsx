"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  // Get the current pathname using the usePathname hook from next/navigation
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive: boolean = link.route === pathname;
                return (
                  <li
                    key={link.id}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
