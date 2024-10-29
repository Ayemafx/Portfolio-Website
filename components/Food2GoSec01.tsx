"use client";
import React from "react";
import { motion } from "framer-motion";
import GradientBall from "./GradientBall";
import { Food2GoProblems, Food2GoSolutions } from "@/data";

const Food2GoSec01 = () => {
  return (
    <section className="w-full relative">
      {/* Animate GradientBall from the left */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-0"
      >
        <GradientBall />
      </motion.div>

      <div className="w-full min-h-[100vh] flex flex-col gap-12 md:gap-24 lg:gap-36 px-10 lg:px-32 py-16">
        <p className="self-start">About</p>

        {/* Center Content */}
        <div className="flex flex-col items-center gap-16">
          {/* Animate the h1: Drops down with bounce */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 8,
              delay: 0.5,
            }}
            className="font-bold lg:text-6xl text-3xl text-center leading-[50px] lg:leading-[75px]"
          >
            Food2Go makes your favorite meals
            {/* Animate the img alt="altImg" coming from the right */}
            <motion.span
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 38, delay: 0.8 }}
              className="w-12 lg:w-16 inline-block align-middle mx-4"
            >
              <img
                
                src="./Group 48095640.png"
                className="inline-block w-full h-auto align-baseline"
                alt="icon"
              />
            </motion.span>
            accessible with ease and speed. Order what makes you happy with just
            a
            <span className="italic border border-white rounded-full  ml-4 px-5 lg:pl-7 lg:pr-9 pb-1">
              tap!
            </span>
          </motion.h1>

          {/* Animate the bottom img */}
          <motion.div
            initial={{ scale: 0, y: "100vh" }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 20,
              delay: 0.9,
              damping: 6,
            }}
            className="w-24 lg:w-32"
          >
            <img  alt="altImg" src="/Group 48095639.png" />
          </motion.div>
        </div>
      </div>

      {/* Problems and Solutions Section */}
      <div className="w-full flex flex-wrap justify-center items-start gap-y-16 gap-4 px-8 md:px-10 lg:px-30 py-20">
        <div className="max-w-[600px] space-y-6 md:p-4">
          <p className="text-3xl font-semibold">Problems</p>
          <ul className="space-y-4 px-8">
            {Food2GoProblems.map((item, index) => (
              <li
                key={index}
                className="text-lg lg:text-xl px-4 list-disc leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[600px] space-y-6 md:p-2">
          <p className="text-3xl font-semibold">Solutions</p>
          <ul className="space-y-4 px-8">
            {Food2GoSolutions.map((item, index) => (
              <li
                key={index}
                className="text-lg lg:text-xl px-4 list-disc leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Food2GoSec01;
