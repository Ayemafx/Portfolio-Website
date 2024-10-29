"use client";
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["400", "700"], // You can specify the weights you need
  subsets: ["latin"],
});

const Stitch = () => {
  // Animation controls for the Crafting section
  const craftingControls = useAnimation();
  const [craftingRef, craftingInView] = useInView({
    triggerOnce: false, // Set to false so the animation replays
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  useEffect(() => {
    // Crafting section animations
    if (craftingInView) {
      craftingControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      craftingControls.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [craftingControls, craftingInView]);

  const animatedImageControls = useAnimation();
  const [animatedImageRef, animatedImageInView] = useInView({
    triggerOnce: false, // Only trigger once when the section comes into view
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Trigger animation when image comes into view
  useEffect(() => {
    if (animatedImageInView) {
      animatedImageControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      animatedImageControls.start({
        x: 100, // Start 100px from the right
        opacity: 0,
      });
    }
  }, [animatedImageControls, animatedImageInView]);

  const firstImageControls = useAnimation();
  const [firstImageRef, firstImageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger when 20% of the image is in view
  });

  // Animations for second image (from left)
  const secondImageControls = useAnimation();
  const [secondImageRef, secondImageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger when 20% of the image is in view
  });

  // Trigger animations when in view
  useEffect(() => {
    if (firstImageInView) {
      firstImageControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      firstImageControls.start({
        x: 100, // Start 100px from the right
        opacity: 0,
      });
    }
  }, [firstImageControls, firstImageInView]);

  useEffect(() => {
    if (secondImageInView) {
      secondImageControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      secondImageControls.start({
        x: -100, // Start 100px from the left
        opacity: 0,
      });
    }
  }, [secondImageControls, secondImageInView]);

  const problemTopControls = useAnimation();
  const [problemTopRef, problemTopInView] = useInView({
    triggerOnce: false, // Animation can trigger every time scrolled into view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Controls for the second image (coming from right)
  const problemRightControls = useAnimation();
  const [problemRightRef, problemRightInView] = useInView({
    triggerOnce: false, // Animation can trigger every time scrolled into view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Effect for the first image (from top)
  useEffect(() => {
    if (problemTopInView) {
      problemTopControls.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      problemTopControls.start({
        y: -100, // Moves up 100px when out of view
        opacity: 0,
      });
    }
  }, [problemTopControls, problemTopInView]);

  // Effect for the second image (from right)
  useEffect(() => {
    if (problemRightInView) {
      problemRightControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      problemRightControls.start({
        x: 200, // Moves to the right by 200px when out of view
        opacity: 0,
      });
    }
  }, [problemRightControls, problemRightInView]);

  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true, // If you want it to animate every time the section is in view, leave this false
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Trigger animation when the image comes into view
  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        x: 0, // Move to the final position (no offset)
        opacity: 1, // Make it fully visible
        transition: { type: "spring", stiffness: 50, damping: 20 },
      });
    } else {
      imageControls.start({
        x: 100, // Start 100px off-screen to the right
        opacity: 0, // Hidden before it's in view
      });
    }
  }, [imageControls, imageInView]);

  return (
    <div className={` ${poppins.className} bg-white overflow-x-hidden w-full `}>
      {/* heading section */}
      <section className="w-full bg-[#563285] h-full md:h-screen p-6 md:p-12 md:py-4  space-y-8  relative">
        <div className="absolute bottom-0 right-0 z-10 h-full w-full">
          <img
            alt="altImg"
            src="./Lovepik_com-401347522-purple-starlight-effect 1@2x.png"
            className="w-full object-cover h-[600px] md:h-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-0 h-full w-full opacity-15">
          <img
            alt="altImg"
            src="./heroImg.png"
            className="w-full object-cover h-[600px] md:h-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-0 h-full w-full">
          <img
            alt="altImg"
            src="./Vector 1 (3).png"
            className="w-full object-cover h-[600px] md:h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-between md:items-start md:justify-start h-full relative z-10">
          <motion.img
            src="./Logo.png"
            className="w-28 lg:w-36 hidden md:block absolute top-0 left-0"
            initial={{ y: -100, opacity: 0 }} // Start position (above the view)
            animate={{ y: 0, opacity: 1 }} // End position (at the top)
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.8,
            }} // Animation type and speed
            alt="Logo"
          />
          <div className="h-[40%] md:h-auto flex flex-col md:flex-row md:items-start md:justify-center  items-center text-center gap-8 xl:gap-28 w-full">
            <motion.img
              src="./Logo.png"
              className="w-28 lg:w-36 md:hidden "
              initial={{ y: -100, opacity: 0 }} // Start position (above the view)
              animate={{ y: 0, opacity: 1 }} // End position (at the top)
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 1,
              }} // Animation type and speed
              alt="Logo"
            />
            <div className="md:w-full space-y-8 px-4  xl:w-[900px] xl:mx-auto  ">
              <img src="./Stitch.png" className="w-64 lg:w-96 mx-auto" />
              <div className="space-y-2">
                <h1 className="font-bold text-2xl md:text-3xl">
                  Game Platform
                </h1>
                <p className="text-base md:text-lg font-extralight">
                  A combination of Steam & Twitch. Stitch not only lets users
                  view and review games but also gives a platform for streamers
                  to stream their favourite games!
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex items-end justify-between hidden w-full">
            <div>
              <motion.img
                src="./image-removebg-preview (1) 1.png"
                className="w-80 lg:w-[500px] absolute bottom-0 -left-16"
                initial={{ x: -200, opacity: 0 }} // Start position (left of the view)
                animate={{ x: 0, opacity: 1 }} // End position (from the left to original position)
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                  delay: 1,
                }} // Spring animation settings
                alt="Animated Image"
              />
            </div>
            <div className="">
              <motion.img
                src="./iPhone 15 Pro (2).png"
                className="absolute -bottom-10 -right-20 w-[480px] lg:w-[700px] xl:w-[800px]"
                initial={{ x: 100, opacity: 0 }} // Start off the screen to the left
                animate={{ x: 0, opacity: 1 }} // End at the original position
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                  delay: 1,
                }} // Spring animation
                alt="iPhone 15 Pro"
              />
            </div>
          </div>
          <div className="relative z-10 h-[60%] md:hidden">
            <motion.img
              src="./iPhone 13.png"
              className="w-56"
              initial={{ y: 200, opacity: 0 }} // Start position (off-screen at the bottom)
              animate={{ y: 0, opacity: 1 }} // End position (at the original position)
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 1,
              }} // Spring animation
              alt="iPhone 13"
            />
          </div>
        </div>
      </section>
      {/* crafting */}
      <section
        className="w-full bg-[#EFEBF3]  h-full p-6 md:p-12 xl:p-24 space-y-8 md:space-y-20 relative"
        id="#crafting"
      >
        <div className="absolute bottom-0 right-0 z-0 w-full">
          <img
            alt="altImg"
            src="./Vector 1 (2).png"
            className="w-full object-cover h-[600px] md:h-full"
          />
        </div>
        <div className="text-black flex flex-col md:flex-row md:justify-between md:items-center md:gap-8 gap-4 md:w-full z-10 relative">
          <h2 className="text-2xl md:text-5xl xl:text-7xl font-bold max-w-xl md:w-full md:gap-2 flex flex-col">
            Crafting
            <span className="block"> an Enhanced</span>
            <span className="md:ml-20 block">Experience</span>
          </h2>
          <p className="text-base font-thin  md:font-light lg:text-lg md:w-[70%]">
            I designed this project to initiate my UI/UX journey, applying
            theoretical knowledge and honing practical skills. Throughout this
            project, I explored user experience principles, intricacies of user
            interface design, low-fi wireframing, high-fi wireframing,
            prototyping, as well as building case studies.
          </p>
        </div>
        <div className="w-full relative z-10 flex flex-col lg:flex-row gap-6 items-center justify-center">
          <div className="relative">
            <div className="bg-white text-black rounded-2xl p-6 flex flex-col gap-4 items-start max-w-[300px] h-[330px] relative ml-10 z-20 lg:ml-0 lg:mb-16">
              <motion.img
                src="./image-removebg-preview (2) 2.png"
                className="w-20"
                alt="Fading Image"
                initial={{ opacity: 0 }} // Start hidden
                animate={{ opacity: [0, 1, 0] }} // Fade in and out
                transition={{
                  duration: 2, // Time for one fade in/out cycle (in seconds)
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              />
              <div className="flex flex-col justify-between h-full">
                <p className="font-extrabold text-[#563285] text-2xl">
                  01. Empathize
                </p>
                <p className="text-lg md:text-base xl:text-lg">
                  Understanding User pain points, goals and objectives of stitch
                </p>
              </div>
            </div>
            <div className="absolute h-[330px] top-[50%]  z-10 lg:hidden">
              <img alt="altImg" src="./Arrow 4.png" />
            </div>
            <div className="absolute w-[250px] xl:w-[330px] bottom-0 left-[50%] z-10 lg:block hidden">
              <img alt="altImg" src="./Arrow 2.png" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-black rounded-2xl p-6 flex flex-col gap-4 items-start max-w-[300px] h-[330px] relative ml-10 z-20 lg:ml-0 lg:mb-16">
              <motion.img
                src="./image-removebg-preview (2) 2.png"
                className="w-20"
                alt="Fading Image"
                initial={{ opacity: 0 }} // Start hidden
                animate={{ opacity: [1, 0, 1] }} // Fade in and out
                transition={{
                  duration: 2, // Time for one fade in/out cycle (in seconds)
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              />
              <div className="flex flex-col justify-between h-full">
                <p className="font-extrabold text-[#563285] text-2xl">
                  02. Define
                </p>
                <p className="text-lg md:text-base xl:text-lg">
                  Defining and Refining the problem Statement.
                </p>
              </div>
            </div>
            <div className="absolute h-[330px] top-[50%]  z-10 lg:hidden">
              <img alt="altImg" src="./Arrow 4.png" />
            </div>
            <div className="absolute w-[250px] xl:w-[330px] bottom-0 left-[50%] z-10 lg:block hidden">
              <img alt="altImg" src="./Arrow 2.png" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-black rounded-2xl p-6 flex flex-col gap-4 items-start max-w-[300px] h-[330px] relative ml-10 z-20 lg:ml-0 lg:mb-16">
              <motion.img
                src="./image-removebg-preview (2) 2.png"
                className="w-20"
                alt="Fading Image"
                initial={{ opacity: 0 }} // Start hidden
                animate={{ opacity: [0, 1, 0] }} // Fade in and out
                transition={{
                  duration: 2, // Time for one fade in/out cycle (in seconds)
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              />
              <div className="flex flex-col justify-between h-full">
                <p className="font-extrabold text-[#563285] text-2xl">
                  03. Design
                </p>
                <p className="text-lg md:text-base xl:text-lg">
                  Ideation, Wireframing and Iterative designing
                </p>
              </div>
            </div>
            <div className="absolute h-[330px] top-[50%]  z-10 lg:hidden">
              <img alt="altImg" src="./Arrow 4.png" />
            </div>
            <div className="absolute w-[250px] xl:w-[330px] bottom-0 left-[50%] z-10 lg:block hidden">
              <img alt="altImg" src="./Arrow 2.png" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-black rounded-2xl p-6 flex flex-col gap-4 items-start max-w-[300px] h-[330px] relative ml-10 z-20 lg:ml-0 lg:mb-16">
              <motion.img
                src="./image-removebg-preview (2) 2.png"
                className="w-20"
                alt="Fading Image"
                initial={{ opacity: 0 }} // Start hidden
                animate={{ opacity: [1, 0, 1] }} // Fade in and out
                transition={{
                  duration: 2, // Time for one fade in/out cycle (in seconds)
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              />
              <div className="flex flex-col justify-between h-full">
                <p className="font-extrabold text-[#563285] text-2xl">
                  04. Prototype
                </p>
                <p className="text-lg md:text-base xl:text-lg">
                  High Fidelity Prototyping, Interactive elements and
                  functionality testing,
                </p>
              </div>
            </div>
            <motion.img
              ref={craftingRef}
              src="./E8A2_Web_Clove_key_Art 1.png"
              className="absolute -bottom-4 -right-10 md:-right-16 xl:-right-32 object-cover w-60 lg:w-96 z-30"
              initial={{ x: 100, opacity: 0 }} // Start off-screen on the right
              animate={craftingControls} // Trigger the animation when in view
              alt="Animated Image"
            />
          </div>
        </div>
      </section>
      {/* GIF Section */}
      <section className="w-full h-[4rem] md:h-[8rem] lg:h-[12rem] xl:h-[16rem] flex justify-center items-center overflow-hidden">
        <img
          src="./clovebutt.gif"
          className="w-full h-full object-cover object-center"
          alt="butterflies"
        />
      </section>
      {/* problem statement section */}
      <section
        className="w-full bg-[#231B4B] h-full p-6 md:p-12 xl:p-24 space-y-8 md:space-y-20 relative"
        id="problem-statement"
      >
        <div className="absolute top-0 right-0 z-0 w-full h-full">
          <img
            src="./Vector 1 (1).png"
            className="w-full object-cover md:h-full h-[900px]"
            alt="Background Vector"
          />
        </div>

        {/* Problem Statement Text */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-8 gap-4 md:w-full z-10 relative">
          <h2 className="text-white text-2xl md:text-5xl xl:text-7xl font-bold max-w-xl md:w-full">
            Problem
            <br /> Statement
          </h2>
          <p className="text-base font-thin md:font-light lg:text-lg text-white">
            After carrying out research and as a gamer as well, I realized that
            although Twitch and Steam are great platforms, why isn’t there a
            platform where the gaming community can review, stream, watch, and
            download games all together?
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="flex relative z-20">
          {/* First Image (comes from top) */}
          <motion.img
            ref={problemTopRef} // Ref to trigger animation
            src="./image 3.png"
            className="w-[600px] xl:w-[750px] hidden lg:block absolute -bottom-40 xl:-bottom-60 -left-10 xl:-left-20 z-20"
            initial={{ y: -100, opacity: 0 }} // Start off-screen above
            animate={problemTopControls} // Trigger animation when in view
            alt="Problem Statement Image"
          />

          <div className="relative w-1/2 hidden lg:block"></div>

          <div className="bg-white rounded-2xl p-6 md:p-10 relative z-10 flex flex-col items-start gap-y-8 lg:w-1/2">
            <p className="bg-[#563285] text-white p-2 px-4 md:px-8 rounded-full text-sm font-semibold md:text-base">
              Problems
            </p>
            <p className="text-black font-medium md:text-base lg:text-lg">
              The gaming industry lacks a cohesive platform integrating game
              reviews, live streaming, and downloads, resulting in incomplete
              experiences. Interaction features for viewers and streamers are
              limited, reducing engagement. Additionally, the absence of
              effective bookmarking and personalized recommendations complicates
              content curation. There&apos;s an urgent need for a unified gaming
              app offering intuitive categorization, effective interaction, and
              personalized recommendations to enhance user engagement.
            </p>

            {/* Second Image (comes from right) */}
            <motion.img
              ref={problemRightRef} // Ref to trigger animation
              src="./image-removebg-preview (4) 1.png"
              className="absolute -bottom-10 -right-10 w-32"
              initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
              animate={{
                x: 0,
                opacity: 1,
              }} // Trigger animation when in view
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              alt="Problem Image Coming from Right"
            />
          </div>
        </div>
      </section>
      {/* components  */}
      <section className="w-full bg-[#EFEBF3]  h-full p-6 md:p-12 xl:p-24 space-y-8 md:space-y-20 relative">
        <div className="absolute top-0 left-0 z-0 w-full ">
          <img
            alt="altImg"
            src="./Vector 1.png"
            className="w-full object-cover h-96 md:h-full"
          />
        </div>
        <div className="absolute top-1/2 left-0 z-0 -translate-y-[50%] w-full">
          <img
            alt="altImg"
            src="./image 5 (1).png"
            className="w-full object-cover h-96 md:h-full"
          />
        </div>
        <div className="w-full z-10 relative flex flex-col md:flex-row items-center justify-center ">
          <div className="space-y-6 md:w-1/3">
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-black ml-2 md:mt-10 self-start">
              Components
            </h3>
            <img alt="altImg" src="./Group 151.png" className="w-full" />
          </div>
          <div className=" md:w-1/3">
            <img alt="altImg" src="./Group 148.png" className="w-full" />
            <img
              alt="altImg"
              src="./Component 11.png"
              className="w-full hidden md:block"
            />
          </div>
          <div className="md:self-end md:w-1/3">
            <img alt="altImg" src="./Group 150.png" className="w-full" />
            <img
              alt="altImg"
              src="./Component 11.png"
              className="w-full md:hidden"
            />
          </div>
        </div>
      </section>
      {/* Style Guide */}
      <section className="w-full bg-[#1A1D2B] h-full p-6 md:p-12 xl:p-24 space-y-8 md:space-y-20 relative">
        <div className="absolute top-0 left-0 z-0 w-full">
          <img
            alt="altImg"
            src="./Vector 2 (1).png"
            className="w-full object-cover h-[600px] md:h-full"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-8 gap-4 md:w-full z-10 relative text-white w-xs">
          <div className="max-w-xl md:w-full space-y-1 md:space-y-3">
            <h2 className="text-2xl md:text-5xl xl:text-7xl font-bold">
              Style Guide
            </h2>
            <h4 className="text-xl md:text-3xl xl:text-5xl font-extralight">
              Typography
            </h4>
          </div>
          <p className="text-base font-normal md:font-light lg:text-lg">
            My primary objective was to ensure a consistent and cohesive user
            interface and visual experience across all screens.
          </p>
        </div>

        {/* Typography Section */}
        <div className="z-10 relative flex flex-col justify-center gap-6 pt-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <h3 className="text-2xl md:text-4xl xl:text-5xl font-bold ml-2 md:mt-10">
              Poppins
            </h3>
            <div className="md:max-w-[400px] lg:max-w-[600px] w-full relative">
              <img
                alt="altImg"
                src="./Frame 1000004204.png"
                className="object-cover w-full"
              />
              <motion.div
                className="absolute bottom-0 -right-16 lg:-right-32 w-52 lg:w-80"
                ref={firstImageRef}
                initial={{ x: 100, opacity: 0 }} // Start 100px from right
                animate={firstImageControls} // Animate from right
              >
                <img
                  alt="altImg"
                  src="./image 7.png"
                  className="h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Inter Section */}
          <div className="relative flex flex-col md:flex-row justify-between gap-6">
            <h3 className="text-2xl md:text-4xl xl:text-5xl font-bold ml-2 md:mt-10">
              Inter
            </h3>
            <motion.img
              alt="altImg"
              ref={secondImageRef}
              src="./image-removebg-preview (6) 1.png"
              className="hidden md:block absolute bottom-6 -left-20 lg:-left-32 w-[400px] lg:w-[600px]"
              initial={{ x: -100, opacity: 0 }} // Start 100px from left
              animate={secondImageControls} // Animate from left
            />
            <div className="md:max-w-[400px] lg:max-w-[600px]">
              <img
                alt="altImg"
                src="./Frame 1000004205.png"
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Color Palette Section */}
        <div className="z-10 flex flex-col justify-center gap-6 pt-20">
          <h3 className="text-2xl md:text-3xl xl:text-5xl font-bold ml-2">
            Color Palette
          </h3>
          <div className="w-full flex flex-wrap">
            <div className="flex flex-col md:flex-row w-full">
              <img
                alt="altImg"
                src="./Frame 1000004232 (2).png"
                className="md:w-1/3 object-cover"
              />
              <img
                alt="altImg"
                src="./Frame 1000004442.png"
                className="md:w-1/3 object-cover"
              />
              <img
                alt="altImg"
                src="./Frame 1000004443.png"
                className="md:w-1/3 object-cover"
              />
            </div>
            <img
              alt="altImg"
              src="./Frame 1000004444.png"
              className="md:hidden w-full"
            />
            <img
              alt="altImg"
              src="./Frame 1000004445.png"
              className="md:hidden w-full"
            />
            <div className="w-full md:flex flex-row hidden">
              <img
                alt="altImg"
                src="./Frame 1000004451.png"
                className="w-1/2 object-cover"
              />
              <img
                alt="altImg"
                src="./Group 155.png"
                className="w-1/2 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Grid */}
      <section className="w-full h-full md:space-y-12 flex flex-row relative ">
        <div className="hidden md:block relative z-0 h-full w-full">
          <img
            alt="altImg"
            src="./Frame 1000004207 (1).png"
            className="w-full "
          />
        </div>
        <div className="bg-[#563285] relative space-y-8 flex flex-col items-center justify-center pt-10  w-full md:hidden">
          <div className="p-6 md:p-12 xl:p-24 flex flex-col items-start gap-6 text-white max-w-sm">
            <p className="bg-black p-2 px-6  md:px-8 rounded-full font-light text-base">
              HOMEPAGE
            </p>
            <p className="text-base">
              My primary objective was to enhance user interface and implement
              grid layout to keep the app organized which optimizes user
              experience and navigation.
            </p>
          </div>
          <img
            alt="altImg"
            src="./Frame 1000004448.png"
            className="w-full !pr-0 md:hidden"
          />
          <img
            alt="altImg"
            src="./Frame 1000004447.png"
            className="w-60 md:hidden"
          />
        </div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2">
          <div className="p-6 pt-0 xl:p-20 lg:p-10 lg:pt-0 xl:pt-0 flex flex-col items-start gap-6 text-white max-w-[200px] lg:max-w-xs xl:max-w-md ">
            <p className="bg-black p-2 px-8 rounded-full font-light text-base -ml-2">
              HOMEPAGE
            </p>
            <p className="text-base">
              My primary objective was to enhance user interface and implement
              grid layout to keep the app organized which optimizes user
              experience and navigation.
            </p>
          </div>
        </div>
        <motion.div
          ref={imageRef} // Reference to track when it enters the viewport
          className="hidden md:block absolute bottom-0 right-10 max-w-md lg:max-w-xl lg:right-16 xl:max-w-4xl"
          initial={{ x: 100, opacity: 0 }} // Initial state (off-screen to the right)
          animate={imageControls} // Controls for animation
        >
          <img
            src="./pngwing 1.png"
            className="w-full !pr-0"
            alt="Animated Image"
          />
        </motion.div>
      </section>
      {/* Low-Fidelity Wireframes */}
      <section className="w-full bg-[#1A1D2B] h-full p-6 md:p-12 xl:p-24 space-y-8 md:space-y-12 relative">
        <div className="absolute top-[50%] -translate-y-[50%] left-0 z-0 w-full">
          <img
            alt="altImg"
            src="./Vector 3.png"
            className="w-full object-cover h-full"
          />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-8 gap-4 md:w-full z-10 relative w-xs">
          <h2 className="text-white text-2xl md:text-5xl xl:text-7xl font-bold max-w-xl md:w-full">
            Low-Fidelity
            <br /> Wireframes
          </h2>
          <p className="font-normal md:font-light text-base lg:text-lg text-white">
            Drew some low fidelity wireframes to get an idea of what my app
            would look like, low fidelity wireframes allowed me to visualize my
            concepts with minimum time and resources,
          </p>
        </div>

        {/* Wireframes */}
        <div className="relative z-10">
          <div className="w-full relative">
            <img alt="altImg" src="./Rectangle 248.png" className="w-full" />

            {/* Animated Image */}
            <motion.div
              className="absolute -top-2 -right-6 md:-right-16 w-28 md:w-60 lg:w-80 lg:-right-20 xl:w-96 xl:-right-28"
              ref={animatedImageRef}
              initial={{ x: 100, opacity: 0 }} // Start 100px to the right
              animate={animatedImageControls} // Trigger animation on scroll
            >
              <img alt="altImg" src="./image 5.png" className="w-full" />
            </motion.div>
          </div>

          {/* Additional Wireframe Images */}
          <div className="flex flex-row">
            <img src="./Rectangle 249.png" className="w-[50%]" />
            <img src="./Rectangle 250.png" className="w-[50%]" />
          </div>
          <div className="flex flex-row">
            <img alt="altImg" src="./Rectangle 251.png" className="w-[50%]" />
            <img alt="altImg" src="./Rectangle 252.png" className="w-[50%]" />
          </div>
        </div>
      </section>
      {/* Wireframes Section */}
      <section className="w-full bg-white  h-full p-6 md:p-12 xl:p-24 space-y-8">
        <h2 className="text-black text-2xl md:text-4xl xl:text-6xl font-bold ">
          Hi-fi Wireframes
        </h2>
        <div className="container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 19.png"} />
          </div>
          <div className="lg:mt-12 max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 14.png"} />
          </div>
          <div className="max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 20.png"} />
          </div>
          <div className="lg:mt-12 max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 18.png"} />
          </div>
          <div className="lg:-mt-12 max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 21.png"} />
          </div>
          <div className=" max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 22.png"} />
          </div>
          <div className="max-w-80 lg:-mt-12">
            <img alt="altImg" src={"./iPhone 13 & 14 - 16.png"} />
          </div>
          <div className="max-w-80">
            <img alt="altImg" src={"./iPhone 13 & 14 - 15.png"} className=" " />
          </div>
        </div>
      </section>
      {/* user flow section */}
      <section className="w-full py-8 bg-[#1A1D2B]  relative overflow-hidden h-screen md:h-full ">
        <div className="absolute bottom-0 left-0 z-0 w-full">
          <img
            alt="altImg"
            src="./image-removebg-preview (10) 1.png"
            className="object-cover w-full h-[300px] md:h-full "
          />
        </div>
        <div className="relative z-10 p-6 md:p-12 xl:p-24 space-y-8 md:-space-y-28 ">
          <div className="space-y-4 max-w-[250px] md:max-w-lg lg:max-w-2xl md:space-y-8">
            <h2 className="text-white text-2xl md:text-5xl xl:text-7xl font-bold ">
              User Flow
            </h2>
            <p className="font-light text-base">
              I used User Flows as visual guides, outlining the steps taken by
              the user to achieve certain goals and tasks within the app.
            </p>
          </div>
          <div className="w-full lg:mt-80">
            <img
              alt="altImg"
              src="./Frame 1000004214.png"
              className="w-full  "
            />
          </div>
        </div>
      </section>
      {/* Onboarding */}
      <section className="w-full bg-[#EFEBF3]  border">
        <div className="relative z-10 p-6 md:p-12 xl:p-24 flex flex-col items-start justify-start space-y-8 !pb-0">
          <p className="bg-black text-white p-1 px-4 md:p-2 md:px-8 rounded-full text-xs font-light md:text-base">
            Onboarding Screens
          </p>
          <div className="relative w-full">
            <img
              alt="altImg"
              src="./Frame 1000004213.png"
              className="w-full h-[350px] md:h-full  object-cover z-10"
            />
            <img
              alt="altImg"
              src="./image-removebg-preview (9) 1.png"
              className="absolute -bottom-10 -left-16 sm:left-12 md:left-4 md:-bottom-16 w-52 md:w-72 lg:w-96 lg:left-6 lg:-bottom-20 xl:w-[500px] xl:-bottom-24  z-20"
            />
          </div>
        </div>
      </section>
      {/* Other Screens Section */}
      <section className="w-full py-8 bg-[#1A1D2B] relative  ">
        <div className="absolute top-0 left-0 z-0 w-full ">
          <img
            alt="altImg"
            src="./Vector 2.png"
            className="object-cover md:h-full h-[600px] w-full"
          />
        </div>
        <div className="relative z-10 p-6 md:p-12 xl:p-24 md:mt-10 xl:mt-20 flex flex-col items-start justify-start space-y-20">
          <h2 className="text-white text-2xl md:text-5xl xl:text-7xl font-bold ">
            Other Screens
          </h2>
          <div className="flex flex-col gap-8 items-start ">
            <p className="bg-black text-white p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
              Login / Sign Up
            </p>
            <div className="flex flex-wrap h-full gap-4 md:gap-8">
              <img
                alt="altImg"
                src="./logo screen.png"
                className="object-cover max-w-72 "
              />
              <img
                alt="altImg"
                src="./welcome screen.png"
                className="object-cover max-w-72 "
              />
              <img
                alt="altImg"
                src="./logo screen (1).png"
                className="object-cover max-w-72 "
              />
              <img
                alt="altImg"
                src="./logo screen (2).png"
                className="object-cover max-w-72 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start mt-4 md:mt-6 ">
            <p className="bg-black text-white  p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
              Homepage / Live Stream
            </p>
            <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto">
              <img
                alt="altImg"
                src="./Frame 23.png"
                className="object-cover max-w-80 -ml-8"
              />
              <img
                alt="altImg"
                src="./logo screen (4).png"
                className="object-cover max-w-72 "
              />
              <img
                alt="altImg"
                src="./logo screen (3).png"
                className="object-cover max-w-72 "
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-start md:gap-8">
            <div className="flex flex-col gap-8 items-start mt-4 md:mt-6 ">
              <p className="bg-black text-white  p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
                Discover
              </p>
              <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto -ml-8">
                <img
                  alt="altImg"
                  src="./main screens.png"
                  className="object-cover max-w-80"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start mt-20 md:mt-6 ">
              <p className="bg-black text-white  p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
                Bookmark
              </p>
              <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto">
                <img
                  alt="altImg"
                  src="./main screens (1).png"
                  className="object-cover max-w-80 -ml-8 "
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start mt-20 md:mt-6 ">
              <p className="bg-black text-white p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
                User Profile
              </p>
              <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto">
                <img
                  alt="altImg"
                  src="./main screens (2).png"
                  className="object-cover max-w-80 -ml-8 "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-4 md:gap-8 ">
            <div className="flex flex-col gap-8 items-start mt-2 md:mt-6">
              <p className="bg-black text-white p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
                Game Review
              </p>
              <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto">
                <img
                  alt="altImg"
                  src="./main screens (3).png"
                  className="object-cover -ml-8 max-w-80"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start mt-2 md:mt-6 ">
              <p className="bg-black text-white p-1 px-4 md:p-2 md:px-8 rounded-full text-sm font-light md:text-base">
                Streamer Profile
              </p>
              <div className="flex flex-wrap h-full gap-4 md:gap-8 mx-auto">
                <img
                  alt="altImg"
                  src="./main screens (4).png"
                  className="object-cover max-w-80 -ml-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <StitchFooter /> */}
      <footer className="relative  w-full bg-black border border-black-100">
        <img
          alt="altImg"
          src="./iPhone 15 Pro (1).png"
          className="object-cover h-[400px] md:h-full w-full"
        />

        {/* Text and Email Section */}
        <div className="my-10 md:absolute top-1/3 left-10 lg:left-20 flex flex-col items-center justify-center gap-4 ">
          <h1 className="font-bold xl:text-7xl text-5xl leading-[50px] lg:leading-[75px] w-[250px] xl:w-[400px] text-center text-white">
            Let&apos;s<span className="italic"> Connect!</span>
          </h1>

          <Link
            href={"mailto:inboxayema@gmail.com"}
            className="border border-neutral-500 text-lg rounded-full p-2 px-4 text-center xl:w-[80%] hover:bg-white text-white-100 hover:text-violet-700"
          >
            inboxayema@gmail.com
          </Link>
        </div>
        <div className="hidden md:block md:absolute bottom-0 -right-0 w-64 lg:w-80 xl:w-96">
          <img alt="altImg" src="./image 8.png" className="w-full" />
        </div>
      </footer>
    </div>
  );
};

export default Stitch;
