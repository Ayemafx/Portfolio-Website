import React from "react";
import GradientBall from "./GradientBall";
import IntroText from "./IntroText";


const Userflow = () => {
  return (
    <section className="relative w-full">
      <GradientBall />
      <div className="px-8 md:px-20 lg:px-32 py-10 space-y-10 w-full">
        <IntroText heading={"User Flow"} paraText={" "} />
        <div className="w-full">
          <img
            
            alt="altImg"
            src="./userflow.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Userflow;
