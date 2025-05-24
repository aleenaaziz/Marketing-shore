"use client"

import React from "react";

export const CustomButton = ({
  text = "",
  variant = "primary",
  isBold = false,
  classes = "",
  onClick = () => { }
}) => {
  return <button onClick={onClick} className={`custom-btn ${variant}-btn ${isBold ? 'bold-btn' : ''} ${classes}`}>{text}</button>;
};

export default CustomButton;
