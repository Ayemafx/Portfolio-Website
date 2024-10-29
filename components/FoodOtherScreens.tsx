import React from "react";
import IntroText from "./IntroText";
import { Food2GoOtherScreens } from "@/data";

const FoodOtherScreens = () => {
  return (
    <section className="relative">
      <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10">
        <IntroText heading={"Other Screens"} paraText={""} />
        <div className="flex flex-wrap gap-y-10 justify-between">
          {Food2GoOtherScreens.map((item, index) => (
            <div
              className={`flex flex-wrap space-y-10 w-full ${
                index > 2 && "md:w-[48%] "
              }`}
            >
              <p className="w-full bg-[#B9EE19] px-6 py-2 text-black text-lg ">
                {item.title}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {item.screens.map((screen) => (
                  <div className="max-w-[250px]">
                    <img  alt="img" src={screen} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodOtherScreens;
