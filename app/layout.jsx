"use client";

import React, { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader";
import Image from "next/image";
import { AuthProvider } from "@/contexts/AuthContext";
import 'react-quill/dist/quill.snow.css';

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children, meta = {} }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false); // Track which button to show
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      setShowScrollUp(true); // Show Scroll Up after scrolling down
    }
  };

  return (
    <html
      lang="en"
      className="scrollbar-custom scroll-smooth overflow-y-scroll h-64 bg-gray-100"
    >
      <head>
        <title>{meta.title || "Green Factor"}</title>{" "}
        {/* Default title, can be overridden by meta.title */}
        <meta
          name="description"
          content={
            meta.description ||
            "Explore sustainable solutions with Green Factor."
          }
        />
        <meta
          name="keywords"
          content={
            meta.keywords || "sustainability, eco-friendly, green practices"
          }
        />
        <link rel="shortcut icon" href="/Gf-logo.png" type="image/x-icon" />
      </head>
      <body className={font.className}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <div className="relative">
              <AuthProvider>{children}</AuthProvider>
              <div ref={bottomRef} /> {/* Reference for scrolling */}
            </div>
            <Footer />

            {/* Scroll Button Container */}
            <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <div
                className="flex flex-col items-center"
                onClick={scrollToBottom}
              >
                <div className="text-white py-2 px-4 transition-transform transform">
                  <h2 className="text-xs text-gray-500 font-semibold mx-10 transform rotate-90">
                    Scroll Down
                  </h2>
                </div>
                <Image
                  src="/slide.svg"
                  alt="scroll down"
                  fill
                  className="rotate-90 mx-5 animate-pulse"
                />
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
