import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

const MobileThemeToggle = ({ themeToggler, theme }) => {
  return (
    <SunIcon onClick={() => themeToggler()}>
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </SunIcon>
  );
};

const SunIcon = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.body};
  margin: 3rem 0;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.headerColor};
  }
`;

export default MobileThemeToggle;
