"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import Posting from "@components/form/Posting";
import { useEffect, useState } from "react";

const CreatePost = () => {
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
    const fetchData = async () => {
      if (user) {
        await getUser();
      }
    };
    fetchData(); // Llamar a fetchData() dentro de useEffect

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]); // Incluir 'user' en el array de dependencias

  const postData = {
    creatorId: userData?._id,
    caption: "",
    tag: "",
    postPhoto: null,
  };

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="pt-6">
      <Posting post={postData} apiEndpoint={"/api/post/new"} />
    </div>
  );
};

export default CreatePost;
