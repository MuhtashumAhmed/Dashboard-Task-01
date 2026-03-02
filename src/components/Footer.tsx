import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t mt-12 ">
      <div className="mx-auto flex  flex-col gap-2 px-4 py-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        {/* Left: brand */}
        <div className="flex flex-col">
          <Image src={"/logo.webp"} alt="logo" height={90} width={90} />
          <span className="">Monitor your key metrics in one place.</span>
        </div>

        {/* Center: links */}
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </div>

        {/* Right: meta */}
        <div className="flex flex-col items-start md:items-end">
          <span>© {year} Supportix global. All rights reserved.</span>
          <span className="text-[11px]">
            Built with Next.js • Data powered by Free Public API
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
