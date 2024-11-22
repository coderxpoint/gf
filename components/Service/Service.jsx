"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "Advertising",
    "Event",
    "Online Reputation Management",
    "Brand Design",
    "Healthcare",
    "Platform and E Commerce Marketing",
    "CSR Marketing",
    "Integrated Marketing",
    "Performance Marketing",
    "CRM",
    "IT Infrastructure and SAM",
    "Strategy and Consulting",
    "Content Production",
    "IoT",
    "Social",
    "Digital Media Planning and Buying",
    "Mobile Marketing",
    "UI/UX",
  ];

  const text = `In the nascent stages of the discovery of the wonders of digital
          marketing, Cog Culture was conceptualized in 2013 to help bridge the
          gap in digital knowledge between SMEs and large corporates. Today, we
          are a thoroughbred "Full Service Agency" owing to smart integration of
          the latest technology with design, in conjunction with human insights.
          Our unique approach of collaborative responsiveness brought about by
          our numerous strategic tie-ups with domain experts makes us a one-stop
          Total Solution Provider for all forms of communications. Our long-term
          associations with our clients are a manifestation of our excellence
          and mutual trust, and a heartfelt belief that we remain partners in
          their growth journey.`;

  return (
    <div className="py-16 px-4 sm:px-2 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-500 text-left mb-6">{text}</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-1 text-left text-gray-700 bg-gray-100 rounded-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                // backgroundColor: "#ffffff",
                borderBottom: "2px solid #4a5568", // Keep the underline effect
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
