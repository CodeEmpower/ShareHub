/* eslint-disable camelcase */
import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import "../../globals.css";
import "../../../styles/prism.css";

import { ThemeProvider } from "@/context/ThemeProvider";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "A community for developers",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: `primary-text-gradient hover:text-primary-500`,
            },
          }}
        >
          <ThemeProvider>
            <main className="background-light850_dark100 relative">
              <Navbar />

              <div className="flex">
                <LeftSidebar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                  <div className="mx-auto w-full max-w-5xl">{children}</div>
                </section>

                <RightSidebar />
              </div>

              <Toaster />
            </main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
