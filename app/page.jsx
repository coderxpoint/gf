"use client";
import React, { useRef, useState } from "react";
import Video from "@/components/Video/Video";
import Service from "@/components/Service/Service";
import Image from "next/image";
import Text from "@/components/Text/Text";
import Slider from "@/components/Slider/Slider";

// Sample array of video sources
const videos = [
  // { id: 1, src: "/video.mp4" },
  { id: 2, src: "/video2.mp4", text: "#Nanobiddingwar", url: "/about" },
  { id: 3, src: "/video3.mp4", text: "Power To Choose" },
  { id: 4, src: "/video4.mp4", text: "No One Left Behind" },
  { id: 5, src: "/video4.mp4", text: "Hats Off" },
  { id: 6, src: "/video4.mp4", text: "Mission Mars" },
  { id: 7, src: "/video4.mp4", text: "Hard Way" },
];
const images = [
  { id: 1, src: "/brand1.jpg" },
  { id: 2, src: "/brand2.jpg" },
  { id: 3, src: "/brand3.jpg" },
];

const Home = () => {
  return (
    <div className="bg-gray-100 h-full w-full flex relative">
      <div className="flex-1 overflow-y-scroll scroll-hidden">
        <div className="py-2">
          <Text />
        </div>
        <div className="py-2">
          <Video videos={videos} images={images} />
          {/* <Slider images={images} /> */}
          {/* <Video videos={videos} /> */}
          {/* <Service /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
