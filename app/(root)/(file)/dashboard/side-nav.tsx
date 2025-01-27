"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gradient-to-r from-black to-gray-950 left-0 top-0 sticky overflow-auto px-10 py-16 flex flex-col gap-5 max-md:hidden 2xl:w-[320px] pr-10 custom-scrollbar">
      <Link href="/dashboard/files">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 borderbackground text-white", {
            "text-blue-500": pathname.includes("/dashboard/files"),
          })}
        >
          <FileIcon /> All Files
        </Button>
      </Link>

      <Link href="/dashboard/favorites"> 
        <Button
          variant={"link"}
          className={clsx("flex gap-2 borderbackground text-white", {
            "text-blue-500": pathname.includes("/dashboard/favorites"),
          })}
        >
          <StarIcon /> Favorites
        </Button>
      </Link>

      <Link href="/dashboard/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 borderbackground text-white", {
            "text-blue-500": pathname.includes("/dashboard/trash"),
          })}
        >
          <TrashIcon /> Trash
        </Button>
      </Link>
    </div>
  );
}
