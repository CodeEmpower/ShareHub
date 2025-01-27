"use client";

import { useUser } from '@clerk/nextjs'
import Loader from '@components/Loader'
import PostCard from '@components/cards/PostCard'
import React, { useEffect, useState } from 'react'

const LikedPosts = () => {
  const { user, isLoaded } = useUser()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`)
    const data = await response.json()
    setUserData(data)
    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await getUser()
      }
    }
    fetchData() // Llamar a fetchData() dentro de useEffect

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]) // Incluir 'user' en el array de dependencias

  return loading || !isLoaded ? <Loader /> : (
    <div className='flex flex-col gap-9'>
      {userData?.likedPosts?.map((post) => (
        <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getUser} />
      ))}
    </div>
  )
}

export default LikedPosts
