import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";

import BlogContext from "../../context/BlogContext";

import CustomContainer from "../ui/CustomContainer";
import Notifications from "../ui/Notifications";
import Loader from "../ui/Loader";

const baseURL = "http://localhost:1337";

export default function Blog() {
  const { data, loading, error } = useContext(BlogContext);

  const recentPosts = useMemo(() => {
    if (data) {
      const sortedData = data.sort(
        (a: any, b: any) =>
          new Date(b.attributes.createdAt).getTime() -
          new Date(a.attributes.createdAt).getTime()
      );
      return sortedData.slice(0, 3);
    }
    return [];
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Notifications />;

  return (
    <CustomContainer title="Blog" paragraph="Recent blog posts">
      <div className="flex flex-wrap gap-6 m-5 py-5 justify-center items-stretch">
        {recentPosts.map((post: any, index: any) => (
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
