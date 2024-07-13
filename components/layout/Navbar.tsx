'use client'
import React from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
// import { UserButton } from "@clerk/nextjs";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-3 flex items-center justify-between bg-gradient-to-br from-black to-gray-800 lg:px-10">
      {/* leftside */}
      <div className="flex items-center mr-4">
        <div className="w-12 h-12 ">
          <Link href="/">
            <Image src="/LogoEmi.png" width={50} height={50} alt="Social" />
          </Link>
        </div>
        <div className="ml-2 ">
          <p className="h2-bold text-heading3-bold text-white max-sm:hidden dark:text-light-900">
            Share<span className="text-primary-500">Hub</span>
          </p>
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center space-x-12">
      <div className="tooltip">
        <Link href="/" passHref>
          <HouseRoundedIcon
            className={`w-9 h-9 text-white hover:text-blue-700 ${pathname === '/' ? 'text-blue-700' : ''}`}
          />
        </Link>
        <span className="tooltip-text">Home</span>
      </div>
      <div className="tooltip">
        <Link href="/dashboard/files" passHref>
          <FolderCopyRoundedIcon
            className={`w-8 h-8 text-white hover:text-blue-700 ${pathname === '/dashboard/files' ? 'text-blue-700' : ''}`}
          />
        </Link>
        <span className="tooltip-text">Files</span>
      </div>
      <div className="tooltip">
        <Link href="/meet" passHref>
          <DuoRoundedIcon
            className={`w-8 h-8 text-white hover:text-blue-700 ${pathname === '/meet' ? 'text-blue-700' : ''}`}
          />
        </Link>
        <span className="tooltip-text">Meeting</span>
      </div>
    </div>

      {/* rightside */}
      <div className="flex space-x-6 items-center ml-4">
        <div className="md:flex space-x-6 hidden text-white">
          <AppsRoundedIcon className={`w-7 h-7 text-white hover:text-blue-700 ${pathname === '/dashboard/files' ? 'text-blue-700' : ''}`} />
          <NotificationsRoundedIcon className={`w-7 h-7 text-white hover:text-blue-700 ${pathname === '/dashboard/files' ? 'text-blue-700' : ''}`}/>
          <MessageRoundedIcon className={`w-7 h-7 text-white hover:text-blue-700 ${pathname === '/dashboard/files' ? 'text-blue-700' : ''}`} />
          <UserButton />
        </div>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
