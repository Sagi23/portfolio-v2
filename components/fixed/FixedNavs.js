import React from "react";
import DarkToggle from "./DarkToggle";
import Navbar from "./Navbar";
import Rights from "./Rights";
import SocialLinks from "./SocialLinks";

const FixedNavs = ({ themeToggler }) => {
  return (
    <>
      <DarkToggle themeToggler={themeToggler} />
      <Navbar />
      <Rights />
      <SocialLinks />
    </>
  );
};

export default FixedNavs;
