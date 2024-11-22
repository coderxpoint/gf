/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Array of image URLs for images (already provided)
const images = [
  "/Adobexd-01.webp",
  "Adobexd-02.webp",
  "Adobexd-03.webp",
  "/belden-01.webp",
  "/belden-02.webp",
  "/belden-03.webp",
  "/PowerSchool01.webp",
  "/PowerSchool-02.webp",
  "/PowerSchool-03.webp",
  "/axis-event1.jpeg",
  "/axis-event2.jpeg",
  "/Trashcon-01.webp",
  "/Trashcon-02.webp",
];

// Array of brand logos (you can update these with actual brand logos)
const brands = [
  "/Adobe-logo.webp",
  "/Bangalore-Datacom-logo.webp",
  "/Saint-Gobain-logo.webp",
  "/Schneider-Electric-logo.webp",
  "/Trashcon-logo.webp",
];

const OurWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to go to the next image in the slider
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image in the slider
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      {/* Our Work Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-green-700 mb-8 underline"
      >
        Our Work
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-center text-gray-600 mb-12"
      >
        We believe our work speaks for itself. Browse our most recent projects
        below and enjoy our handmade work with love for every detail.
      </motion.p>

      {/* Project images grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* Modal for image popup with slider */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        >
          <div className="relative bg-white p-6 rounded-lg max-w-2xl w-full">
            <FaTimes
              className="absolute top-0 right-0 text-4xl cursor-pointer"
              onClick={closeModal}
            />
            <div className="flex justify-center items-center">
              <motion.img
                src={images[currentImageIndex]}
                alt={`Project ${currentImageIndex + 1}`}
                className="max-w-full h-auto rounded-lg"
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Navigation buttons for the slider */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-full"
                onClick={prevImage}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-full"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8 underline">
          Our Brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurWork;
