"use client";
import React from "react";
import { motion } from "framer-motion";

const Crew = () => {
  const crewMembers = [
    {
      name: "Anuj Ninan",
      title: "Director – Green Factor",
      description: `Having a wealth of experience in working with enterprise clients and ensuring that solutions align seamlessly with their strategic objectives, Anuj is well known for his customer-centric approach to deliver tangible results. He has been passionately engaged in clients’ businesses through business consulting and communication practices like Brand Consulting, Integrated Marketing Programming, and Digital Strategy. Anuj is also an independent Sales & Marketing Consultant for Large and SME organizations.`,
      image: "/Anuj-Ninan.webp", // Add image path here
    },
    {
      name: "Hari Prasad",
      title: "Head of Production Studio, Green Factor",
      description: `Having worked on multiple brands, he believes that Ideas are as good as their execution. The performance and outcomes are directly related to the quality and finesse of the production, whether it is an experiential event, tradeshow, retail store, or a digital user experience like website applications, including the physical branded experience. He likes to explore all kinds of technologies, from electronics to engineering, from material science to product design. This versatility allows him to visualize and integrate the different aspects of a customer project.`,
      image: "/Hari-Prasad.webp", // Add image path here
    },
    {
      name: "Partho Sinha",
      title: "Partner & Chief Creative Officer, Green Factor",
      description: `Over 35 years of experience in the area of Creative and Brand strategy. Has worked on many campaigns and built successful Brands. Recipient of many Awards in the National & International Arena. One of the few people in the country who can marry creativity with Business Objectives. He believes that Life is exciting when you are on the digital highway. He was working as National Creative Director with DigitalLBi – a Publicis Groupe Company.`,
      image: "/Partho-Sinha.webp", // Add image path here
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-6 underline">
          Meet the Crew
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Our team is diverse, dynamic, and ready to bring fresh ideas and
          innovative solutions to the table.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 h-auto lg:grid-cols-2 gap-6 p-6 bg-white">
        <motion.div
          className="h-full flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="Anuj-Ninan.webp"
            alt="Anuj Ninan"
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        <motion.div
          className="h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.span
            className="text-2xl font-bold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Anuj Ninan
          </motion.span>
          <motion.span
            className="text-lg font-semibold mb-4 text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Director – Green Factor
          </motion.span>
          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Having a wealth of experience in working with enterprise clients and
            ensuring that solutions align seamlessly with their strategic
            objectives, Anuj is well known for his customer-centric approach to
            deliver tangible results. He has been passionately engaged in
            clients’ businesses through business consulting and communication
            practices like Brand Consulting, Integrated Marketing Programming,
            and Digital Strategy. Anuj is also an independent Sales & Marketing
            Consultant for Large and SME organizations.
          </motion.p>
        </motion.div>
      </div>

      <hr className="border-t border-gray-200 my-8 w-full" />

      <div className="grid grid-cols-1 h-auto lg:grid-cols-2 gap-6 p-6 bg-white">
        <motion.div
          className="h-full flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.span
            className="text-2xl font-bold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Hari Prasad
          </motion.span>
          <motion.span
            className="text-lg font-semibold mb-4 text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Head of Production Studio, Green Factor
          </motion.span>
          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Having worked on multiple brands, he believes that Ideas are as good
            as their execution. The performance and outcomes are directly
            related to the quality and finesse of the production, whether it is
            an experiential event, tradeshow or a retail store or a digital user
            experience like website, applications including the physical branded
            experience. He like to explore all kinds of technologies, from
            electronics to engineering, from material science to product design.
            This versatility allows he to visualize and integrate the different
            aspects of a customer project.
          </motion.p>
        </motion.div>

        <motion.div
          className="h-full flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="Hari-Prasad.webp"
            alt="Hari Prasad"
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>
      </div>

      <hr className="border-t border-gray-200 my-8 w-full" />

      <div className="grid grid-cols-1 h-auto lg:grid-cols-2 gap-6 p-6 bg-white">
        <motion.div
          className="h-full flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="Partho-Sinha.webp"
            alt="Anuj Ninan"
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        <motion.div
          className="h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.span
            className="text-2xl font-bold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Partho Sinha
          </motion.span>
          <motion.span
            className="text-lg font-semibold mb-4 text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Partner & Chief Creative Officer, Green Factor
          </motion.span>
          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Over 35 years of experience in the area of Creative and Brand
            strategy. Has worked on many campaigns and built successful Brands.
            Recipient of may Awards in the National & International Arena. One
            of the few people in the country who can marry creativity with
            Business Objectives. He believes that Life is exciting when you are
            on the digital highway. He was working as National Creative Director
            with DigitalLBi – a Publicis Groupe Company.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Crew;
