"use client";
import {
  HomeIcon,
  Bars4Icon,
  RadioIcon,
  MusicalNoteIcon,
  ListBulletIcon,
  AdjustmentsVerticalIcon,
  ChartBarIcon,
  MicrophoneIcon
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
        { name: "Browse", href: "/", icon: Bars4Icon },
        { name: "Radio", href: "/", icon: RadioIcon },
      ],
    },
    {
      title: "Library",
      links: [
        { name: "Playlist", href: "/", icon: ListBulletIcon },
        { name: "Songs", href: "/", icon: MusicalNoteIcon },
        { name: "Albums", href: "/", icon: AdjustmentsVerticalIcon },
        { name: "Artist", href: "/", icon: MicrophoneIcon },
        { name: "Top-50", href: "/", icon: ChartBarIcon },
      ],
    },
    {
      title: "Playlists",
      links: [
        { name: "Recently Played", href: "/", icon: MusicalNoteIcon },
        { name: "Recently Added", href: "/", icon: MusicalNoteIcon },
        { name: "Top Hits", href: "/", icon: MusicalNoteIcon },
        { name: "Top Artist", href: "/", icon: MusicalNoteIcon },
        { name: "Top Albums", href: "/", icon: MusicalNoteIcon },
        { name: "Heavy Metal", href: "/", icon: MusicalNoteIcon },
        { name: "80's Hits ", href: "/", icon: MusicalNoteIcon },
        { name: "Gym music ", href: "/", icon: MusicalNoteIcon },
        { name: "Study ", href: "/", icon: MusicalNoteIcon },
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
