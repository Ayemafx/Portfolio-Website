"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import GradientBall from "./GradientBall";
import IntroText from "./IntroText";
import { useRef } from "react";

const FoodGrid = () => {
  // Create a ref to observe when the section comes into view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants for the left and right divs
  const leftVariant = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 1 },
    },
  };

  const rightVariant = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 1 },
    },
  };

  return (
    <section className="relative w-full" ref={ref}>
      <GradientBall />
      <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10 w-full">
        <IntroText
          heading={"Grid"}
          paraText={
            "My primary objective was to enhance user interface and implement grid layout to keep the app organized which optimizes user experience and navigation."
          }
        />
        <div className="space-y-6 relative">
          {/* Left side div (Screen Size) */}
          <motion.div
            className="max-w-96 mx-auto bg-[#4D4D4D] p-8 rounded-3xl lg:absolute top-[8%] lg:w-[200px] space-y-2 -left-4 xl:left-[10%]"
            variants={leftVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="font-normal">Screen Size</p>
            <p className="text-2xl font-medium">360 by 742</p>
          </motion.div>

          {/* Left side div (Screens) */}
          <motion.div
            className="max-w-96 mx-auto bg-[#80B71B] p-8 rounded-3xl lg:absolute top-[60%] -left-28 lg:w-[300px] space-y-2 xl:left-[2%]"
            variants={leftVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="font-normal">Screens</p>
            <p className="text-2xl font-medium">Around 60 screens in Figma</p>
          </motion.div>

          {/* Center image */}
          <img src="./foodGrid.png" className="w-96 xl:w-[450px] mx-auto" />

          {/* Right side div (Count) */}
          <motion.div
            className="bg-[#4D4D4D] max-w-96 p-8 rounded-3xl lg:absolute top-[20%] right-20 lg:w-[180px] space-y-2 mx-auto xl:right-[18%]"
            variants={rightVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="font-normal">Count</p>
            <p className="text-2xl font-medium">5</p>
          </motion.div>

          {/* Right side div (Type) */}
          <motion.div
            className="bg-[#80B71B] max-w-96 p-8 rounded-3xl lg:absolute top-[50%] right-0 lg:w-[230px] space-y-2 mx-auto xl:right-[10%]"
            variants={rightVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="font-normal">Type</p>
            <p className="text-2xl font-medium">Stretch</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodGrid;
