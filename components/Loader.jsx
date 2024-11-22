import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white ">
      <motion.div
        className="relative w-24 h-24"
        initial={{ scale: 1 }} // Start larger for zoom-out effect
        animate={{ scale: 2 }} // Scale down to normal size
        transition={{
          duration: 1.5, // Duration of the zoom-out effect
          ease: "easeInOut",
          loop: Infinity,
          repeatType: "reverse", // Reverses the animation for a continuous zoom-in/zoom-out effect
        }}
      >
        <Image
          src="/GF-logo.png" // Replace with your loader image path
          alt="Loading..."
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
