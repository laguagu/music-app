"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps, NavLinksProps } from "@/lib/definitions";

function Sidenav() {
  const currentPath = usePathname();

  const discoveryLinks = [
    { name: "Disvocer", href: "/", icon: HomeIcon },
    { name: "Browse", href: "/", icon: HomeIcon },
    { name: "Radio", href: "/", icon: HomeIcon },
  ];

  const libaryLinks = [
    { name: "Disvocer", href: "/", icon: HomeIcon },
    { name: "Disvocer", href: "/2", icon: HomeIcon },
  ];

  return (
    <nav className="flex flex-col">
      <NavLinks links={discoveryLinks} title="Discover" />
    </nav>
  );
}

function NavLinks({ links, title }: NavLinksProps) {
  return (
    <div className="px-5 py-4 text-zinc-400 w-52 min-h-screen border">
      <p className="text-lg font-bold pb-2 ml-4 text-slate-600">{title}</p>
      {links.map((link) => (
        <NavLink key={link.name} {...link} />
      ))}
    </div>
  );
}

function NavLink({ name, href, icon: Icon }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      key={name}
      className={classNames("py-2 flex rounded-lg m-1 bg-white", {
        "bg-gray-100 hover:bg-slate-100": name === "Disvocer",
        "hover:bg-gray-100": name !== currentPath,
      })}
    >
      <div className="flex items-center justify-center">
        <Icon className="w-5 mr-2 ml-4 text-black" />
        <span className="text-slate-500 font-semibold text-sm">{name}</span>
      </div>
    </Link>
  );
}

export default Sidenav;
