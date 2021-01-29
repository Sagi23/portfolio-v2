import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { Tween } from "react-gsap";

const DarkToggle = ({ themeToggler, theme }) => {
  return (
    <Container>
      <Tween from={{ y: "200px" }} delay={2} opacity={0} duration={0.2}>
        <FixedLine />
      </Tween>
      <Tween from={{ y: "50px" }} delay={2.5} opacity={0} duration={0.2}>
        <SunIcon onClick={() => themeToggler()}>
          {theme === "dark" ? <BsSun /> : <BsMoon />}
        </SunIcon>
      </Tween>
    </Container>
  );
};

const FixedLine = styled.div`
  background-color: ${({ theme }) => theme.fontColor};
  width: 1px;
  bottom: 0;
  right: 3rem;
  height: 405px;
  position: fixed;
`;

const SunIcon = styled.div`
  position: fixed;
  bottom: 420px;
  right: 2.3rem;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.headerColor};
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 50px;
`;

export default DarkToggle;
