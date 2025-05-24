"use client";
import { ICONS } from "@/utils/getIcons";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="social-links">
      <div className="icon facebook">{ICONS?.facebook}</div>
      <div className="icon twitter">{ICONS?.twitter}</div>
      <div className="icon youtube">{ICONS?.youtube}</div>
      
    </div>
  );
};

export default SocialIcons;
