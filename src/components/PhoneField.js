"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneField = ({ country, state, setState, name }) => {
  const countryCode = country.includes("florida") ? "us" : "pk";
  return (
    <PhoneInput
      country={countryCode}
      value={state?.phoneNumber}
      name={name}
      onChange={(phone) => setState({...state, phoneNumber: phone})}
    />
  );
};

export default PhoneField;
