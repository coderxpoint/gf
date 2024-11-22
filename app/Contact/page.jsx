/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for managing submit status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true when form is submitted

    const formData = {
      name,
      email,
      phone_number: phoneNumber,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatusMessage("Your message has been submitted successfully.");

        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        setStatusMessage(result.message || "Failed to submit the form.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false); // Set submitting to false when the request is done
    }
  };

  return (
    <div className="h-auto flex justify-center flex-col w-full">
      <div className="py-10">
        <div className="max-w-3xl mx-auto flex justify-center flex-col ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-700 underline">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>

        <div className="lg:flex-row flex-col flex mx-auto h-auto max-w-3xl gap-2">
          <div className="lg:w-1/2 mx-5 lg:mx-auto">
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative px-4 py-2 overflow-hidden border-2 rounded-full group"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </form>
            {statusMessage && (
              <p className="text-center mt-4 text-gray-500">{statusMessage}</p>
            )}
          </div>
          <div className="w-3/2 lg:w-1/2 w-full py-5 lg:flex hidden justify-center items-center h-auto mx-auto">
            <img src="/analtsis.webp" alt="" />
          </div>
        </div>
      </div>

      {/* visit out place */}
      <div className="text-center py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 ">VISIT OUR OFFICE</h2>
        <p className="mb-8 text-lg">Green Opulence Factor Pvt Ltd</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {/* Card 1: Address */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" rounded-b-3xl rounded-t-lg p-6 text-center flex flex-col items-center bg-white relative overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
          >
            <FaMapMarkerAlt className="text-green-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-2 border-b border-black">
              Address
            </h3>
            <p className="text-sm text-gray-600">
              1, Chikkagubbi Main Rd, Chikkagubbi Village, Bengaluru, Karnataka
              560077
            </p>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" rounded-b-3xl rounded-t-lg p-6 text-center flex flex-col items-center bg-white relative overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
          >
            <FaPhoneAlt className="text-green-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-2 border-b border-black">
              Phone
            </h3>
            <p>
              +91 9845950325 <br /> +91 9886359786
            </p>
          </motion.div>

          {/* Card 3: Email */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" rounded-b-3xl rounded-t-lg p-6 text-center flex flex-col items-center bg-white relative overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
          >
            <FaEnvelope className="text-green-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-2 border-b border-black">
              Email
            </h3>
            <a
              href="mailto:anuj@greenfactor.in"
              className="hover:text-green-500"
            >
              anuj@greenfactor.in
            </a>
          </motion.div>
        </div>

        <h3 className="text-xl font-bold mt-10">GET IN TOUCH</h3>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Social Links */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              className="text-green-600 hover:text-black"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="text-green-600 hover:text-black"
              size={24}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-green-600 hover:text-black" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
