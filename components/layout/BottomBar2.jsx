"use client"


import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar2 = () => {
  const pathname = usePathname();

  return (
    <div className="sticky flex bottom-0 z-20 w-full bg-slate-950 px-6 py-3 items-center justify-between md:hidden">
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
};

export default BottomBar2;
