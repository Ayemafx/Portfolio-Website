
import Link from "next/link";
import React from "react";

const Food2GoFooter = () => {
  return (
    <footer className="relative w-full">
      <div className="hidden md:block object-fill w-full">
        <img
          
          alt="img"
          src="./foodFooter.png"
          className="w-full"
        />
      </div>
      <div className="md:hidden object-fill w-full">
        <img
          
          alt="img"
          src="./footerSM.png"
          className="w-full"
        />
      </div>
      <div className="my-10 md:absolute top-1/3 left-10 lg:left-20 flex flex-col items-center justify-center gap-4  ">
        <h1 className="font-bold xl:text-7xl text-5xl leading-[50px] lg:leading-[75px] w-[250px] xl:w-[400px] text-center ">
          Let's<span className="italic"> Connect!</span>
        </h1>

        <a
          href={"mailto:inboxayema@gmail.com"}
          className="border border-neutral-500 text-lg text-[#80B71B] rounded-full p-2 px-4 text-center xl:w-[80%] hover:bg-white"
        >
          inboxayema@gmail.com
        </a>
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 max-w-[40%] ">
        <img  alt="img" src="./removebg-preview 1.png" />
      </div>
    </footer>
  );
};

export default Food2GoFooter;
