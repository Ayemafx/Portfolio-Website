"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import GradientBall from "./GradientBall";

const FoodCategory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation only once when in view

  return (
    <section ref={sectionRef} className="relative">
      <GradientBall left />
      <div className="px-10 md:px-20 lg:px-32 py-10 lg:py-20 space-y-10 flex flex-col">
        <h1 className="font-bold lg:text-6xl text-3xl text-center leading-[40px] lg:leading-[75px]">
          Select Your Favourite Restaurant from Categories Page
          <span className="w-16 lg:w-24 inline-block align-middle mx-4">
            <img
              src="/Group 48095639.png"
              className="inline-block w-full h-auto align-baseline"
              alt="icon"
            />
          </span>
        </h1>

        <div className="flex items-center justify-center gap-10">
          <div className="relative flex flex-col items-center justify-center space-y-10 h-auto max-w-[400px]">
            {/* First green box sliding in from left */}
            <motion.div
              className="bg-[#80B71B] px-8 py-6 rounded-3xl lg:absolute top-[20%] -left-28 xl:-left-1/2 lg:w-[250px]"
              initial={{ opacity: 0, x: -100 }} // Start hidden and off-screen to the left
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible when in view
              transition={{ duration: 0.7, delay: 0.3 }} // Animation timing
            >
              <p className="text-2xl font-medium">
                Filters that help filter the restaurants.
              </p>
            </motion.div>

            {/* Category img */}
            <div className="max-w-[400px]">
              <motion.img
                alt="img"
                src="./7.2 Category detail.png"
                initial={{ opacity: 0 }} // Start hidden and rotated
                animate={isInView ? { opacity: 1 } : {}} // Rotate back to 0 when in view
                transition={{ duration: 0.2 }} // Rotation timing
              />
            </div>

            {/* Second green box sliding in from right */}
            <motion.div
              className="bg-[#80B71B] px-8 py-6 rounded-3xl lg:absolute bottom-10 -right-28 xl:-right-1/2 lg:w-[250px]"
              initial={{ opacity: 0, x: 100 }} // Start hidden and off-screen to the right
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible when in view
              transition={{ duration: 0.7, delay: 0.3 }} // Animation timing
            >
              <p className="text-2xl font-medium">
                Informative Restaurant tags and description.
              </p>
            </motion.div>
          </div>

          {/* Pizza img rotating in */}
          <motion.div
            initial={{ opacity: 0, rotate: 180, x: 100 }} // Start hidden and rotated
            animate={isInView ? { opacity: 1, rotate: 0, x: 0 } : {}} // Rotate back to 0 when in view
            transition={{ duration: 2 }} // Animation duration
          >
            <img
              src="./pizzaFrame.png"
              width={400}
              className="hidden lg:block"
              alt="Pizza"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
