/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

const Header = () => {
  function FramerHeadline() {
    const TextVariants = {
      initial: { opacity: 0, rotateX: -90 },
      animate: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: 90 },
    };

    const texts = ["Factor", "CoderXpoint"];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWord((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000); // 3-second interval for switching

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.span className="flex">
        <AnimatePresence mode="wait" initial={false}>
          {texts.map((word, index) =>
            index === currentWord ? (
              <motion.span
                key={word}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={TextVariants}
                transition={{ duration: 0.8 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ) : null
          )}
        </AnimatePresence>
      </motion.span>
    );
  }

  return (
    <header className="bg-gray-100 sticky top-0 z-10">
      <div className="container mx-auto max-w-4xl flex justify-between items-center p-2">
        {/* Logo */}
        <motion.p className="md:text-2xl text-lg md:mx-4 mx-4 gap-1 font-bold flex text-gray-400">
          <Link href={"/"}> Green</Link>{" "}
          <motion.span
            className="text-black"
            initial={{ rotateY: 0 }}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <FramerHeadline />{" "}
          </motion.span>
        </motion.p>
        <div className="text-green-500 relative md:mx-20">
          <div className=" ">
            <Image
              className="logo"
              src={"/GF-logo.png"}
              width={100}
              height={50}
              alt="logo"
              style={{ objectFit: "contain" }}
            />
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
