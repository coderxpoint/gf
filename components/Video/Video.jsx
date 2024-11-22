"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MediaSlider = ({ videos = [], images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Static Video Display */}
      {videos.map((video, index) => (
        <div
          key={`video-${index}`}
          className="relative flex-shrink-0 w-full sm:w-[80%] md:w-[65%] h-auto mb-3 p-4"
        >
          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay Text */}
          <div className="text-[2rem] absolute inset-0 flex items-center justify-center text-white font-bold lg:text-[5rem] bg-opacity-100 text-opacity-100 rounded-lg">
            {video.text} {/* Display the overlay text */}
          </div>
          <Link href={video.url || "#"}>
            {" "}
            {/* Use a fallback URL, e.g., '#' */}
            <motion.div
              className="absolute md:bottom-8 bottom-5 right-2 text-xs lg:text-lg text-white font-bold bg-opacity-100 rounded-full cursor-pointer p-4 "
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center justify-center">
                <span className="transform rotate-90">View Work</span>
              </div>
            </motion.div>
          </Link>
        </div>
      ))}

      {/* Image Slider */}
      {images.map((image, index) => (
        <div
          key={`image-${index}`}
          className={`flex-shrink-0 w-full sm:w-[80%] md:w-[65%] h-auto mb-3 p-4 ${
            index === activeIndex ? "block" : "hidden" // Show only the active image
          }`}
        >
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MediaSlider;
