import React from "react";
import DarkToggle from "./DarkToggle";
import Navbar from "./Navbar";
import Rights from "./Rights";
import SocialLinks from "./SocialLinks";
import { mediaQueries } from "../../styles/theme";
import styled from "styled-components";

const FixedNavs = ({ themeToggler, theme }) => {
  return (
    <StyledDiv>
      <DarkToggle themeToggler={themeToggler} theme={theme} />
      <Navbar />
      <Rights />
      <SocialLinks />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media ${mediaQueries.md} {
    display: none;
  } ;
`;

export default FixedNavs;
