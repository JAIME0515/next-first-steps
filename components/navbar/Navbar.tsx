"use client";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  const navItems = [
    { path: "/about", text: "About" },
    { path: "/pricing", text: "Pricing" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map(({ path, text }) => (
        <Link key={path} href={path} className="mr-2">
          {text}
        </Link>
      ))}
    </nav>
  );
};
