/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCalendarAlt,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaVideo,
  FaStore,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-6 underline">Our Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          Our quality standards apply also in terms of service, technical
          expertise, and advice. Our dedicated employees are happy to assist you
          with know-how and experience in your daily business.
        </p>
      </motion.div>
      <img
        src="/Unbenannt-1-1.png"
        className="h-60 justify-center flex mx-auto"
        alt=""
      />

      {/* Service Sections */}
      <ServiceSection title="Digital">
        <ServiceCard icon={<FaLaptopCode />} title="Web Development" />
        <ServiceCard icon={<FaMobileAlt />} title="App Development" />
        <ServiceCard icon={<FaCalendarAlt />} title="Digital Events" />
      </ServiceSection>

      <ServiceSection title="Creative Services">
        <ServiceCard icon={<FaPaintBrush />} title="Creative Campaigns" />
        <ServiceCard icon={<FaBullhorn />} title="Internal Communications" />
        <ServiceCard icon={<FaChartLine />} title="Product Marketing" />
      </ServiceSection>

      <ServiceSection title="Video Film Services">
        <ServiceCard icon={<FaVideo />} title="Brand Video" />
        <ServiceCard icon={<FaVideo />} title="Product Video" />
        <ServiceCard icon={<FaVideo />} title="Corporate Video" />
      </ServiceSection>

      <ServiceSection title="Experiential Services">
        <ServiceCard icon={<FaStore />} title="Store Retail Design" />
        <ServiceCard icon={<FaCalendarAlt />} title="Events & Exhibition" />
        <ServiceCard icon={<FaTools />} title="Demo Tools" />
        <ServiceCard icon={<FaBullhorn />} title="Brand Merchandising" />
      </ServiceSection>
    </div>
  );
};

// Service Section Wrapper with Animation
const ServiceSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} // This ensures the section animation happens only once
    className="max-w-3xl mx-auto mt-10"
  >
    <h2 className="text-3xl font-semibold text-green-600 mb-6">{title}</h2>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15, // Stagger the animation of each card
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {children}
    </motion.div>
  </motion.div>
);

// Reusable ServiceCard Component with Motion Effect
const ServiceCard = ({ icon, title }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ scale: 1.05 }} // Add Framer Motion hover effect
    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform"
  >
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="font-semibold text-lg mt-2">{title}</h3>
  </motion.div>
);

export default Services;
