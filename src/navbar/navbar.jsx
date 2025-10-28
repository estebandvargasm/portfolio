import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconMail,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <FloatingDock
        desktopClassName="pointer-events-auto"
        mobileClassName="pointer-events-auto translate-y-20"
        items={links}
      />
    </div>
  );
}
