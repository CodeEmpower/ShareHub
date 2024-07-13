"use client";

import { useUser } from '@clerk/nextjs';
import Loader from '@components/Loader';
import PostCard from '@components/cards/PostCard';
import React, { useCallback, useEffect, useState } from 'react';

const SavedPosts = () => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  // Definición de getUser como useCallback
  const getUser = useCallback(async () => {
    try {
      const response = await fetch(`/api/user/${user.id}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [user]);

  useEffect(() => {
    getUser();
  }, [getUser]); // getUser ahora es estable gracias a useCallback

  return loading || !isLoaded ? <Loader /> : (
    <div className='flex flex-col gap-9'>
      {userData?.savedPosts?.map((post) => (
        <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getUser} />
      ))}
    </div>
  );
};

export default SavedPosts;
