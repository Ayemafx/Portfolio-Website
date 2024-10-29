import React from 'react'
import GradientBall from './GradientBall'
import IntroText from './IntroText'


const FoodSignupLogin = () => {
  return (
    <section className="relative">
      <GradientBall left />
      <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10">
        <IntroText
          heading={"Easy Login / Signup"}
          paraText={
            "Through Food2Go users can easily login and signup with their email id or phone Number."
          }
        />
        <div className="w-full flex items-center justify-center -space-x-14">
          {/* Left img */}
          <div className=" z-0 max-w-[300px]">
            <img
              
              src="./easyLogin1.png"
              alt="Login Screen 1"
              className=" w-full md:opacity-70"
            />
          </div>

          {/* Middle img - pop-up effect */}
          <div className="z-20 transform max-w-[400px] md:scale-120 xl:scale-90 shadow-lg">
            <img
              src="./easyLogin2.png"
              alt="Login Screen 2"
              className="w-full"
            />
          </div>

          {/* Right img */}
          <div className="z-0 max-w-[300px]">
            <img
              
              src="./easyLogin3.png"
              alt="Login Screen 3"
              className="w-full md:opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodSignupLogin
