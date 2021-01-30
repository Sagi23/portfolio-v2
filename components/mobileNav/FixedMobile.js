import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../../styles/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  displayin,
  noDisplayin,
  lightTheme,
  darkTheme,
} from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import MobileContentNav from "./MobileContentNav";
import MobileThemeToggle from "./MobileThemeToggle";
import MobileSocial from "./MobileSocial";

const FixedMobile = ({ themeToggler, theme }) => {
  const [display, setDisplay] = useState(true);

  const displayToggler = () => {
    display ? setDisplay(false) : setDisplay(true);
  };

  const ContainerContent = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.fontColor};
    display: ${display ? "none" : "block"};
  `;

  return (
    <ThemeProvider theme={display ? displayin : noDisplayin}>
      <Container>
        <HamIcon>
          <GiHamburgerMenu onClick={() => displayToggler()} />
        </HamIcon>
        <ContainerContent onClick={() => displayToggler()}>
          <ExitIcon>
            <GrClose />
          </ExitIcon>
          <MobileThemeToggle themeToggler={themeToggler} theme={theme} />
          <MobileContentNav />
          <MobileSocial />
        </ContainerContent>
      </Container>
    </ThemeProvider>
  );
};

const HamIcon = styled.div`
  margin-top: 2rem;
  margin-right: 4rem;
  font-size: 30px;
  display: ${({ theme }) => theme.display};
`;
const ExitIcon = styled.div`
  padding-top: 2rem;
  margin-left: 2rem;
  font-size: 30px;
  color: ${({ theme }) => theme.body};
`;

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  @media ${mediaQueries.lg} {
    display: none;
  }
`;

export default FixedMobile;
