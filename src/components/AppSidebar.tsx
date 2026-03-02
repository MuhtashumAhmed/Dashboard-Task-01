"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    label: "links",
    items: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Analytics",
        url: "/analytics",
      },
      {
        name: "Profile",
        url: "/profile",
      },
      {
        name: "Settings",
        url: "/settings",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className=" h-full  ">
      {/* <Sidebar className="  "> */}
      <SidebarHeader className="  ">
        {" "}
        <Image src={"/logo.webp"} alt="logo" height={120} width={120} />
      </SidebarHeader>

      {/* ======== side bar main links or content ======= */}
      <SidebarContent className="">
        {sidebarLinks?.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const path = usePathname();
                  let active = path === item.url;

                  // ==== Retrun links============

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className={`${
                          active
                            ? "bg-primary w-auto  hover:text-white text-white dark:text-zinc-900  hover:bg-primary"
                            : "hover:bg-primary hover:text-white hover:dark:text-zinc-900"
                        } `}
                      >
                        <Link href={item?.url}>
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
