import React from "react";
import SeoBanner from "@/components/Banners/SeoBanner";
import ReachSection from "@/components/ReachSection";
import SeoServices from "@/components/SeoServices";
import SeoProccess from "@/components/SeoProccess";
import BetterResults from "@/components/BetterResults";
import SeoFooter from "@/components/Footer/SeoFooter";
import { footerService } from "@/constant/data";

const page = () => {
  return (
    <>
      <SeoBanner page={"florida"} />
      <ReachSection />
      <SeoServices headingName={"Florida's"} />
      <SeoProccess />
      <BetterResults />
      <SeoFooter footerService={footerService?.florida} />
    </>
  );
};

export default page;
