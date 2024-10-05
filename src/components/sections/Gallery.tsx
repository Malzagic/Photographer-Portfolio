import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomButton from "../ui/CustomButton";
import CustomContainer from "../ui/CustomContainer";

const Gallery = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://localhost:1337";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch photos with category and image populated
        const photoResponse = await axios.get(
          `${baseURL}/api/photos?populate[0]=category&populate[1]=image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
            },
          }
        );
        setPhotos(photoResponse.data.data);

        // Fetch categories
        const categoryResponse = await axios.get(`${baseURL}/api/categories`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
          },
        });
        setCategories(categoryResponse.data.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to get the first photo of each category
  const getCategoryCoverPhoto = (categoryId: string) => {
    return photos.find(
      (photo) => photo.attributes.category.data.id.toString() === categoryId
    );
  };

  // Filter and sort to get the latest 3 categories
  const latestCategories = [...categories]
    .sort((a, b) => {
      const dateA = new Date(a.attributes.createdAt).getTime();
      const dateB = new Date(b.attributes.createdAt).getTime();
      return dateB - dateA; // Sort descending by creation date
    })
    .slice(0, 3); // Take the first 3

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <CustomContainer id="gallery" title="Gallery" paragraph="Enjoy my works">
      <div className="flex flex-col sm:flex-row">
        {latestCategories.map((category) => {
          // Get the first photo for each category
          const coverPhoto = getCategoryCoverPhoto(category.id.toString());

          return (
            <div
              key={category.id}
              className="flex flex-col justify-between items-center mt-5"
            >
              <div className="flex flex-col justify-center items-center mx-5">
                {coverPhoto && coverPhoto.attributes.image && (
                  <img
                    src={`${baseURL}${coverPhoto.attributes.image.data.attributes.url}`}
                    alt={category.attributes.name}
                    className="w-[150px] h-[150px] object-cover border border-yellow-500 drop-shadow-lg mt-2 rounded-full"
                  />
                )}
                <h2 className="text-2xl text-center text-yellow-500 font-semibold my-4 drop-shadow-lg">
                  {category.attributes.name}
                </h2>
                <p className="text-center text-slate-100 max-w-xs mx-auto">
                  {category.attributes.description[0]?.children[0]?.text}
                </p>
              </div>
              <CustomButton
                text="View Gallery"
                to={`/gallery/${category.id}`}
              />
            </div>
          );
        })}
      </div>
    </CustomContainer>
  );
};

export default Gallery;
