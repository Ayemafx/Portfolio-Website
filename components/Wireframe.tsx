import React from "react";
import GradientBall from "./GradientBall";
import IntroText from "./IntroText";

const Wireframe = () => {
  return (
    <section className="relative">
      <GradientBall left />
      <div className="px-10 md:px-20 lg:px-32 py-10 space-y-10">
        <IntroText
          heading={"Wireframes"}
          paraText={
            "After working on the user flow, I started with designing high fidelity wireframes to further help me through the process"
          }
        />
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="staggered-item max-w-[200]">
            <img src={"./Login Wireframe.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./Signup Wireframe.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.0 Location.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1 Homescreen.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.1 Cart.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.2 Cart.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.3 Checkout.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.4 Checkout.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.4 Checkout.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.8 Checkout.png"} />
          </div>
          <div className="staggered-item max-w-[200]">
            <img src={"./6.1.9 Checkout.png"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wireframe;
