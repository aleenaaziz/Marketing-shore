import Image from "next/image";
import React from "react";
import CustomButton from "../button";
import NavList from "./nav";
import SocialIcons from "../socialIcons";
import ResposiveHeaderContent from "./ResposiveHeaderContent";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container mx-auto">
        <div className="img">
          <Image src={"/logo.png"} width={150} height={50} alt="logo" />
        </div>
        <NavList />
        <SocialIcons />
        <CustomButton text="Get Free Audit" isBold={true} />
        <ResposiveHeaderContent />
      </div>
    </div>
  );
};

export default HeaderBottom;
