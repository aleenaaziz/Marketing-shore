import React from "react";
import SeoBanner from "@/components/Banners/SeoBanner";
import BetterResults from "@/components/BetterResults";
import SeoFooter from "@/components/Footer/SeoFooter";
import ReachSection from "@/components/ReachSection";
import SeoServices from "@/components/SeoServices";
import SeoProccess from "@/components/SeoProccess";
import { footerService } from "@/constant/data";

const page = () => {
  return (
    <>
      <SeoBanner page={"Pakistan"} />
      <ReachSection />
      <SeoServices headingName={"Pakistan's"} />
      <SeoProccess />
      <BetterResults />
      <SeoFooter footerService={footerService?.pakistan} />
    </>
  );
};

export default page;
