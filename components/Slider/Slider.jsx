"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] h-auto mb-3 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "block" : "hidden"
            } w-full h-auto`} // Display only the active image
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
    </div>
  );
};

export default Slider;
