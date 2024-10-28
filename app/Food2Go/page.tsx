import Food2GoFooter from "@/components/Food2GoFooter";
import Food2GoSec01 from "@/components/Food2GoSec01";
import FoodCategory from "@/components/FoodCategory";
import FoodGrid from "@/components/FoodGrid";
import FoodNavSection from "@/components/FoodNavSection";
import FoodOtherScreens from "@/components/FoodOtherScreens";
import FoodSignupLogin from "@/components/FoodSignupLogin";
import Typography from "@/components/Typography";
import Userflow from "@/components/Userflow";
import Wireframe from "@/components/Wireframe";
import React from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"], // You can specify the weights you need
  subsets: ["latin"],
});

const Food2Go: React.FC = () => {
  return (
    <div className={`!${poppins.className} overflow-hidden space-y-4`}>
      <Food2GoSec01 />
      <Userflow />
      <Wireframe />
      <FoodGrid />
      <Typography />
      <FoodSignupLogin/>
      <FoodNavSection />
      <FoodCategory />
      <FoodOtherScreens />
      <Food2GoFooter />
    </div>
  );
};

export default Food2Go;
