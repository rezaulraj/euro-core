import React, { useState, useEffect } from "react";
import axios from "axios";

const GalleryImage = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gallery");
        setGalleryData(response.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Beautiful Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((item) => (
          <div
            key={item._id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold">{item.text}</p>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.text}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <p className="text-xl font-semibold">{selectedImage.text}</p>
              <p className="text-gray-300">
                Uploaded:{" "}
                {new Date(selectedImage.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
