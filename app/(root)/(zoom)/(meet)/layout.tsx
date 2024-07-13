import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/layout/Navbar";
import StreamVideoProvider from "@/providers/StreamClientProvider";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import BottomBar4 from "@components/layout/BottomBar4";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mi reunion",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
     
        <body className={`${inter.className} bg-gradient-to-t from-gray-950 to-black `}>
          <Toaster />
          <main className="relative">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div className="w-full">
                  <StreamVideoProvider>{children}</StreamVideoProvider>
                </div>
              </section>
            </div>
          </main>
          <BottomBar4/>
        </body>
    </html>
  );
};

export default RootLayout;
