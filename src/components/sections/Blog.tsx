import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomContainer from "../ui/CustomContainer";

export default function Blog() {
  const [blogData, setBlogData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://localhost:1337";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/api/blogs?populate=image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
            },
          }
        );

        const sortedData = response.data.data.sort(
          (a: any, b: any) =>
            new Date(b.attributes.createdAt).getTime() -
            new Date(a.attributes.createdAt).getTime()
        );

        const recentPosts = sortedData.slice(0, 3);

        setBlogData(recentPosts);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(blogData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <CustomContainer title="Blog" paragraph="Recent blog posts">
      <div className="flex flex-wrap gap-6 m-5 py-5 justify-center items-stretch">
        {blogData.map((post, index) => (
          <Link
            to={`/blog/${post.id}`}
            key={index}
            className="flex flex-col w-60 p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-full h-36 overflow-hidden rounded-lg mb-4">
              <img
                src={`${baseURL}${post.attributes.image.data.attributes.url}`}
                alt={post.attributes.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-xl font-semibold text-yellow-500 mb-2 text-center">
              {post.attributes.title}
            </h1>
            <p className="text-slate-100 text-sm text-center">
              {post.attributes.description}
            </p>
          </Link>
        ))}
      </div>
    </CustomContainer>
  );
}
