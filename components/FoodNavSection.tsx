import React from 'react'
import IntroText from './IntroText'


const FoodNavSection = () => {
  return (
    <section className="relative w-full">
      <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10">
        <IntroText
          heading={"Easy Navigation"}
          paraText={
            "Order your favourite meals through Food2Go’s easy home screen navigation allowing the user to choose through categories, deals, popular and nearby restaurants."
          }
        />
        <div className="w-full">
          <img
            
            alt="altImg"
            src="./easyNav.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default FoodNavSection
