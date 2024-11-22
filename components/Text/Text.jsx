"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Text = () => {
  const text = `We are Cog Culture, where the best of minds come together to become
  cogs of a larger wheel and deliver awesomeness. While our design
  philosophy reflects the society at large, we prefer delivering work that
  matters. We can be sharks, and we can be sharks. We love to morph ourselves
  into whatever our consumers need us to be to create the wow experience. Hey!
  BTW, we are The Design Agency of the Year 2019 at ABBY's Goafest, India.
  And, we are also The Still Craft Agency of the Year 2019 at ABBY's Goafest,
  India.`;

  return (
    <div className="hidden lg:h-[80vh] text-[30px] text-gray-300 text-left bg-white font-semibold rounded-lg  mx-auto lg:flex w-[80%] lg:w-[61%] p-4">
      <Typewriter
        options={{
          strings: [text], // Add all your strings here
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20, // Adjusted delete speed to be faster
          cursor: "|",
        }}
      />
    </div>
  );
};

export default Text;
