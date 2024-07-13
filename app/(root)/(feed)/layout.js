import { ClerkProvider } from "@clerk/nextjs";
import "../../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";
import Navbar from "@components/layout/Navbar";

export const metadata = {
  title: "Feed-Home",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black `}>
          <main className="relative ">
            <Navbar />
            <section className="flex flex-row">
              <LeftSideBar />
              <MainContainer>{children}</MainContainer>
              <RightSideBar />
            </section>
          </main>
          <BottomBar /> 
        </body>
      </html>
      </ClerkProvider>
  );
}
