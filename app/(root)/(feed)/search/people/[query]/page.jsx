"use client"

import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import UserCard from "@components/cards/UserCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const SearchPeople = () => {
  const { query } = useParams();

  const [loading, setLoading] = useState(true);
  const [searchedPeople, setSearchedPeople] = useState([]);

  const getSearchedPeople = useCallback(async () => {
    try {
      const response = await fetch(`/api/user/search/${query}`);
      const data = await response.json();
      setSearchedPeople(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching searched people:", error);
    }
  }, [query]);

  useEffect(() => {
    getSearchedPeople();
  }, [getSearchedPeople]); // Añade getSearchedPeople como dependencia

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="flex gap-6">
        <Link href={`/search/posts/${query}`} className="tab bg-dark-2">
          Posts
        </Link>
        <Link href={`/search/people/${query}`} className="tab bg-purple-1">
          People
        </Link>
      </div>

      {searchedPeople.map((person) => (
        <UserCard key={person._id} userData={person} update={getSearchedPeople} />
      ))}
    </div>
  );
};

export default SearchPeople;
