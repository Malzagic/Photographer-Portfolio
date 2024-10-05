import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageHero from "../components/hero/PageHero";
import Footer from "../components/sections/Footer";
import Modal from "../components/modal/Modal";

export default function GalleryPage() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModal, setIsModal] = useState<string | null>("");
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null); // To track the selected photo for modal view

  const baseURL = "http://localhost:1337";

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/api/categories/${id}?populate=photos.image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
            },
          }
        );
        setCategoryData(response.data.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

  const categoryName = useMemo(() => {
    return categoryData ? categoryData.attributes.name : "Category Gallery";
  }, [categoryData]);

  const showModal = (photo: any) => {
    setSelectedPhoto(photo);
    setIsModal("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModal("");
  };

  console.log(categoryData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={`category-gallery ${isModal && isModal}`}>
      <PageHero title={`${categoryName} Category`} />
      <div className="masonry my-4 mx-5">
        {categoryData.attributes.photos.data.map((photo: any) => (
          <div
            key={photo.id}
            className="masonry-item bg-gray-800 rounded-lg shadow-md p-2 cursor-pointer"
            onClick={() => showModal(photo)} // Set the selected photo for modal preview
          >
            <img
              src={`${baseURL}${photo.attributes.image.data.attributes.formats.small.url}`} // Use thumbnail for gallery view
              alt={photo.attributes.title}
              className="w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold text-center text-yellow-500 mt-2">
              {photo.attributes.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal to show full-resolution image */}
      {selectedPhoto && (
        <Modal onClose={() => closeModal()}>
          <img
            src={`${baseURL}${selectedPhoto.attributes.image.data.attributes.url}`} // Use full-resolution image
            alt={selectedPhoto.attributes.title}
            className="w-full h-full object-contain" // Use 'object-contain' for proper aspect ratio
          />
          <h2 className="text-lg font-semibold text-center text-yellow-500 mt-2">
            {selectedPhoto.attributes.title}
          </h2>
        </Modal>
      )}
      <Footer />
    </div>
  );
}
