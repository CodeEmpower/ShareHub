import React from 'react';
import Image from "next/image";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';
// import { UserButton } from "@clerk/nextjs";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Link from 'next/link'
import { UserButton, } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="p-3 flex items-center justify-between bg-gradient-to-br from-black to-gray-800 lg:px-10">
      {/* leftside */}
      <div className='flex items-center mr-4'>
        <div className='w-12 h-12 '>
          <Link href="/" >
            <Image src="/social.png" width={50} height={50} alt="Social" className='rounded-lg' />
          </Link>
        </div>
        <div className='ml-2 '>
          <input
            type="text"
            placeholder="Search Social"
            className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block"

          />
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center space-x-12">
        <Link href="/" >
          <HouseRoundedIcon className="w-8 h-8 " titleAccess='home' />
        </Link>
        <Link href="/dashboard/files" >
          <FolderCopyRoundedIcon className="w-8 h-8" />
        </Link>
        <Link href="/foro" >
          <LiveHelpRoundedIcon className="w-8 h-8" />
        </Link>
        <Link href="/meet" >
          <DuoRoundedIcon className="w-10 h-10" />
        </Link>
      </div>

      {/* rightside */}
      <div className="flex space-x-6 items-center ml-4">
        <div className="md:flex space-x-6 hidden">
          <AppsRoundedIcon className="w-7 h-7" />
          <NotificationsRoundedIcon className="w-7 h-7" />
          <MessageRoundedIcon className="w-7 h-7" />
          <UserButton />
        </div>
        {/* <UserButton afterSignOutUrl="/" /> */}
        
      </div>
    </nav>
  );
}

export default Navbar