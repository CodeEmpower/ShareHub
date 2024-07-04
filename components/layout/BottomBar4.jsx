"use client"
import Image from 'next/image';

import { sidebarLinks2 } from '@/constants';
import { cn } from '@/lib/utils';
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar4 = () => {
  const pathname = usePathname();

  return (
    <div className="sticky flex bottom-0 z-20 w-full bg-slate-950 px-6 py-3 items-center justify-between md:hidden">
       {sidebarLinks2.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
    </div>
  );
};

export default BottomBar4;
