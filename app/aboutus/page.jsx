"use client";
import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const getRandomColor = () => {
  const colors = ["#16a34a"];
  return colors;
  // [Math.floor(Math.random() * colors.length)];
};

const page = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6 underline">
          About Us
        </h1>
        <p className="text-lg text-gray-700 lg:text-center text-justify mb-4">
          Green Factor is an 8+ years old business consulting and experiential
          marketing company focused on B2B Marketing, B2B Events, Retail, and
          commercial projects.
        </p>
        <p className="text-lg lg:text-center text-justify text-gray-700">
          Green Factor is a dynamic team of marketing and event management
          professionals with a passion for creativity, strategy, and results.
          With a diverse range of backgrounds and expertise, our team brings
          together strategic thinkers, creative minds, and digital experts to
          deliver comprehensive marketing and event management solutions
          tailored to your unique needs.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col justify-center px-6 py-8">
        <div className="mx-auto flex justify-center">
          <h1 className="text-green-600 text-2xl lg:text-3xl font-bold uppercase">
            BUSINESS CONSULTING - MARKETING - EVENTS
          </h1>
        </div>
        <div className="mx-auto flex w-auto justify-center py-8">
          <div className="mx-auto flex h-auto w-auto items-center justify-center border-t-0 border-b-0 border-l-4 border-r-4 border-black px-4 py-2 lg:text-4xl text-center font-extrabold uppercase tracking-wider">
            <Typewriter
              options={{
                strings: [
                  "<span style='color:" +
                    getRandomColor() +
                    "'>We Are Green Factor</span>",
                  "<span style='color:" +
                    getRandomColor() +
                    "'>We Change The Web</span>",
                  "<span style='color:" +
                    getRandomColor() +
                    "'>We Build Brands</span>",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </div>
        </div>
      </div>

      <div className=" py-8 max-w-4xl mx-auto">
        <h2 className="lg:text-4xl text-3xl underline font-semibold text-center text-green-600 mb-6">
          What We Do
        </h2>
        <p className="text-gray-700 text-justify lg:text-center">
          We offer a full suite of marketing and event management services
          designed to elevate your brand, expand your reach, and drive
          measurable results. From creating tailor-made experiences that exceed
          expectations to digital marketing, social media management, content
          creation, branding, and strategic consulting, we provide the expertise
          and resources to help you achieve your business goals.
        </p>
      </div>

      <div className="text-center py-8 px-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">GET IN TOUCH WITH US</h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaPhoneAlt className="text-green-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p>
              +91 9845950325 <br /> +91 9886359786
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaEnvelope className="text-green-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href="mailto:anuj@greenfactor.in">anuj@greenfactor.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
