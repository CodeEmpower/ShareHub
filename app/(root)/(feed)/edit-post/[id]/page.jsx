"use client"

import Loader from "@components/Loader";
import Posting from "@components/form/Posting";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPost = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});

  const getPost = async () => {
    const response = await fetch(`/api/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPost();
    };
    fetchData(); // Llamar a fetchData() dentro de useEffect

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Incluir 'id' en el array de dependencias

  const postInfo = {
    creatorId: postData?.creator?._id,
    caption: postData?.caption,
    tag: postData?.tag,
    postPhoto: postData?.postPhoto,
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="pt-6">
      <Posting post={postInfo} apiEndpoint={`/api/post/${id}`} />
    </div>
  );
};

export default EditPost;
