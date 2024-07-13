"use client"

import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import PostCard from "@components/cards/PostCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

const SearchPost = () => {
  const router = useRouter();
  const { query } = router.query;

  const [loading, setLoading] = useState(true);
  const [searchedPosts, setSearchedPosts] = useState([]);

  const getSearchedPosts = useCallback(async () => {
    try {
      const response = await fetch(`/api/post/search/${query}`);
      const data = await response.json();
      setSearchedPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching searched posts:", error);
    }
  }, [query]);

  useEffect(() => {
    getSearchedPosts();
  }, [getSearchedPosts]); // Añade getSearchedPosts como dependencia

  const { user, isLoaded } = useUser();

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6">
        <Link href={`/search/posts/${query}`} className="tab bg-purple-1">
          Posts
        </Link>
        <Link href={`/search/people/${query}`} className="tab bg-dark-2">
          People
        </Link>
      </div>

      {searchedPosts.map((post) => (
        <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getSearchedPosts} />
      ))}
    </div>
  );
};

export default SearchPost;
