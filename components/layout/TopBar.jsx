"use client";

import { useEffect, useState } from "react";
import { Add, Logout, Person, Search } from "@mui/icons-material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRouter } from "next/navigation";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { dark } from "@clerk/themes";
import Loader from "@components/Loader";

const TopBar = () => {
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const router = useRouter();
  const [search, setSearch] = useState("");

  return !isLoaded || loading ? (
    <Loader />
  ) : (
    <div className="mt-11 flex justify-between gap-28 max-sm:flex-col sm:items-center">
      <div className="flex flex-1 gap-4">
        <div className="relative flex flex-1">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search
            className="search-icon"
            onClick={() => router.push(`/search/posts/${search}`)}
          />
        </div>
        <div className="flex md:hidden">
          <button className="flex items-center rounded-lg py-1 px-5 primary-gradient min-h-[46px] text-light-1 text-small-semibold">
            <Link href={`/profile/${userData._id}/posts`}>
              <Person sx={{ fontSize: "35px", color: "white" }} />
            </Link>
          </button>
        </div>
      </div>

      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <AddPhotoAlternateIcon /> <p>Create A Post</p>
      </button>
    </div>
  );
};

export default TopBar;
