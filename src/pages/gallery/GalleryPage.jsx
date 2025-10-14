import React from "react";
import HeroGallery from "./HeroGallery";
import GalleryImage from "./GalleryImage";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <HeroGallery />
      <GalleryImage />
    </div>
  );
};

export default GalleryPage;
