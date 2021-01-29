import React from "react";
import DarkToggle from "./DarkToggle";
import Navbar from "./Navbar";
import Rights from "./Rights";
import SocialLinks from "./SocialLinks";

const FixedNavs = ({ themeToggler, theme }) => {
  return (
    <>
      <DarkToggle themeToggler={themeToggler} theme={theme} />
      <Navbar />
      <Rights />
      <SocialLinks />
    </>
  );
};

export default FixedNavs;
