import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";

const Rights = ({ opacity }) => {
  const FixedLine = styled.div`
    background-color: ${({ theme }) => theme.fontColor};
    height: 1px;
    position: fixed;
    bottom: 3.6rem;
    left: 0;
    width: 220px;
    display: ${opacity};
    transition: opacity 2s;
  `;

  const CopyrightsText = styled.p`
    display: ${opacity};
    &:hover {
      color: #449ddb;
    }
  `;

  return (
    <CopyrightsContainer>
      <CopyrightsTextContainer>
        <Tween from={{ x: "-200px" }} delay={0.5} opacity={0} duration={0.2}>
          <FixedLine />
        </Tween>
        <Tween from={{ x: "-50px" }} delay={1} opacity={0} duration={0.2}>
          <CopyrightsText>Sagi Twig © 2021 All Rights Reserved.</CopyrightsText>
        </Tween>
      </CopyrightsTextContainer>
    </CopyrightsContainer>
  );
};

const CopyrightsTextContainer = styled.div`
  width: 9.1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;
const CopyrightsContainer = styled.div`
  position: fixed;
  width: 90%;
  bottom: 2.5rem;
  left: 15rem;
`;

export default Rights;
