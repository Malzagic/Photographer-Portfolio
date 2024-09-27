import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const baseURL = "http://localhost:1337";

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/api/blogs/${id}?populate=image`, // Fetch the post by ID
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
            },
          }
        );
        setPost(response.data.data);
      } catch (err) {
        setError("Error fetching post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    post && (
      <div className="blog-post-detail">
        <img
          src={`${baseURL}${post.attributes.image.data.attributes.url}`}
          alt={post.attributes.title}
        />
        <h1>{post.attributes.title}</h1>
        <p>{post.attributes.content}</p>
      </div>
    )
  );
}
