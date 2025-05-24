"use client";

import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: props) {
  const pathName = usePathname();
  return (
    <NavbarItem isActive={pathName === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}
