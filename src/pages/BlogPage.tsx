import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PageHero from "../components/hero/PageHero";
import CustomMainContainer from "../components/ui/CustomMainContainer";
import Footer from "../components/sections/Footer";

export default function BlogPage() {
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

        setBlogData(response.data.data);
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
    <>
      <PageHero title="Blog" />
      <CustomMainContainer styles="flex-1 py-4">
        <div className="grid grid-cols-3 gap-3 my-4">
          {blogData.map((post, index) => (
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
