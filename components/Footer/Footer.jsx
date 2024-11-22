"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { name: "About Us", href: "/About" },
  { name: "Our Work", href: "/Work" },
  { name: "Case Studies", href: "#/CaseStudies" },
  { name: "Careers", href: "Careers" },
  { name: "Contact Us", href: "/Contact" },
];

const socialMediaLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black p-4 w-full">
      <div className="md:max-w-screen-xl lg:w-[62%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between text-center">
        {/* Footer Links */}
        <ul className="flex flex-wrap gap-4 items-center justify-center text-xs font-thin text-gray-400 uppercase mb-4 md:mb-0">
          {footerLinks.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }} // Initial state for animation
              animate={{ opacity: 1, y: 0 }} // Animate to visible state
              transition={{ duration: 0.3, delay: index * 0.1 }} // Add delay for staggering
              whileHover={{ scale: 1.1, color: "#22C55E" }} // Hover animation
            >
              <Link href={link.href} className="hover:text-white">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="lg:hidden flex justify-center space-x-4 mb-4 md:mb-0">
          {socialMediaLinks.map((media, index) => {
            const Icon = media.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }} // Initial state for animation
                animate={{ opacity: 1, scale: 1 }} // Animate to visible state
                transition={{ duration: 0.3, delay: index * 0.1 }} // Add delay for staggering
                whileHover={{ scale: 1.2, color: "#22C55E" }} // Hover animation
              >
                <Link
                  href={media.href}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Text */}
        <span className="text-xs text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline text-green-500 ">
            Green Factor
          </Link>
          . All Rights Reserved.
        </span>
        <span className="text-xs text-gray-400 gap-2">
          Designed & Developed by{" "}
          <Link
            href="https://www.coderxpoint.com/"
            className="hover:underline text-green-500 "
          >
            CoderXpoint
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
