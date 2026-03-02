"use client";

import { SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import AvatarDropdown from "./AvatarDropdown";
import { Bell } from "@deemlol/next-icons";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();

  const currentUrl = pathname === "/" ? "Dashboard" : pathname;

  return (
    <header className="py-2 flex items-center justify-between  ">
      {/* sidebar button and active link */}
      <div className="flex items-center gap-3 ">
        <SidebarTrigger />
        <p className="capitalize font-bold  ">
          {currentUrl.trim().replace("/", " ")}
        </p>
      </div>
      {/* 2nd div for theme buton , notification and profile */}
      <div className="flex items-center justify-center gap-2  ">
        <Button variant={"outline"} size={"icon"}>
          <Bell size={22} />
        </Button>
        <ThemeToggle />
        <AvatarDropdown />
      </div>
    </header>
  );
};

export default Header;
