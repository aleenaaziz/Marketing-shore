"use client";

import React, { useState } from "react";
import NavList from "./nav";
import { ICONS } from "@/utils/getIcons";

const ResposiveHeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <>{ICONS?.x}</> : <>{ICONS?.bar}</>}
      </button>
      {isOpen && <NavList mobile={true} horizontal={true} />}
    </>
  );
};

export default ResposiveHeaderContent;
