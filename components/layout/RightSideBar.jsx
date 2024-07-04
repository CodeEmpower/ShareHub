import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky items-center right-0 bg-gradient-to-t from-gray-950 to-black top-0 z-20 h-screen w-[300px] xl:w-[350px] flex flex-col gap-4 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
      <div className="flex flex-col gap-4 borderbackground">
        <h3 className="text-light-1 text-heading3-bold">Messages</h3>
        <p className="text-small-semibold text-light-2">mostrar mensages</p>
      </div>
      <div className="flex flex-col gap-4 borderbackground">
      <p className="text-light-1 text-heading3-bold">Followers</p>
      <p className="text-small-semibold text-light-2">mostrar seguidores</p>
      </div>
    </div>
  );
};

export default RightSideBar;
