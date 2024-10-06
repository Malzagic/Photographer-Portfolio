import React, { useContext } from "react";
import { Link } from "react-router-dom";

import BlogContext from "../context/BlogContext";

import PageHero from "../components/hero/PageHero";
import CustomMainContainer from "../components/ui/CustomMainContainer";
import Footer from "../components/sections/Footer";

const baseURL = "http://localhost:1337/";

export default function BlogPage() {
  const { data, loading, error } = useContext(BlogContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <PageHero title="Blog" />
      <CustomMainContainer styles="flex-1 py-4">
        <div className="grid grid-cols-3 gap-3 my-4">
          {data.map((post, index) => (
            <Link
              to={`/blog/${post.id}`}
              key={index}
              className="flex flex-col bg-gray-800 rounded-sm px-2 py-4 cursor-pointer"
            >
              <div className="flex w-full">
                <img
                  src={`${baseURL}${post.attributes.image.data.attributes.url}`}
                  alt={post.attributes.title}
                  className=" h-[100px] rounded-full border border-yellow-500"
                />
              </div>
              <div className="flex flex-col justify-center items-start px-4">
                <h1 className="text-xl font-semibold text-yellow-500 my-2">
                  {post.attributes.title}
                </h1>
                <p className="text-slate-100 text-md">
                  {post.attributes.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CustomMainContainer>
      <Footer />
    </>
  );
}
