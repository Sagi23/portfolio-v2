import React, { useEffect, useState } from "react";
import DarkToggle from "./DarkToggle";
import Navbar from "./Navbar";
import Rights from "./Rights";
import SocialLinks from "./SocialLinks";
import { mediaQueries } from "../../styles/theme";
import styled from "styled-components";

const FixedNavs = ({ themeToggler, theme }) => {
  const [opacity, setOpacity] = useState("flex");

  let lastScrollTop = 0;
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (typeof window !== "undefined") {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          setOpacity("none");
        } else {
          setOpacity("flex");
        }
        lastScrollTop = scrollTop;
      }
    });
  }, [lastScrollTop]);

  return (
    <StyledDiv>
      <DarkToggle themeToggler={themeToggler} theme={theme} />
      <Navbar opacity={opacity} />
      <Rights opacity={opacity} />
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
