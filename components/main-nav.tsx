"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/lib/definitions";

function Sidenav() {
  const linkGroups = [
    {
      title: "Discover",
      links: [
        { name: "Discover", href: "/", icon: HomeIcon },
        { name: "Browse", href: "/", icon: HomeIcon },
        { name: "Radio", href: "/", icon: HomeIcon },
      ],
    },
    {
      title: "Library",
      links: [
        { name: "Playlist", href: "/", icon: HomeIcon },
        { name: "Songs", href: "/", icon: HomeIcon },
        { name: "Albums", href: "/", icon: HomeIcon },
        { name: "Artist", href: "/", icon: HomeIcon },
        { name: "Top-50", href: "/", icon: HomeIcon },
      ],
    },
    {
      title: "Playlists",
      links: [
        { name: "Recently Played", href: "/", icon: HomeIcon },
        { name: "Recently Added", href: "/", icon: HomeIcon },
        { name: "Top Hits", href: "/", icon: HomeIcon },
        { name: "Top Artist", href: "/", icon: HomeIcon },
        { name: "Top Albums", href: "/", icon: HomeIcon },
        { name: "Heavy Metal", href: "/", icon: HomeIcon },
        { name: "80's Hits ", href: "/", icon: HomeIcon },
        { name: "Gym music ", href: "/", icon: HomeIcon },
        { name: "Study ", href: "/", icon: HomeIcon },
      ],
    },
  ];

  return (
    <nav className="flex flex-col">
      <div className="px-5 text-zinc-400 w-52 min-h-screen border-r">
        {linkGroups.map((group) => (
          <div key={group.title}>
            <p className="text-lg font-bold pb-2 ml-2 text-slate-600 mt-5">
              {group.title}
            </p>
            {group.links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}

function NavLink({ name, href, icon: Icon }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      key={name}
      className={classNames("py-2 mt-1 flex rounded-lg my-px", {
        "bg-gray-100 hover:bg-slate-100 ": href === "/" && name === "Discover",
        "hover:bg-gray-100 transition duration-75": name !== currentPath,
      })}
    >
      <div className="flex items-center justify-center">
        <Icon className="w-5 mr-2 ml-2 text-black" />
        <span className="text-slate-500 font-semibold text-xs">{name}</span>
      </div>
    </Link>
  );
}

export default Sidenav;
