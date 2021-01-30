import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import styled from "styled-components";
import { Tween } from "react-gsap";

const Navbar = ({ opacity }) => {
  const FixedLine = styled.div`
    background-color: ${({ theme }) => theme.fontColor};
    height: 1px;
    width: 350px;
    position: fixed;
    top: 3.2rem;
    right: 0;
    overflow: hidden;
    display: ${opacity};
  `;

  const Ul = styled.ul`
    position: relative;
    list-style: none;
    gap: 3rem;
    display: ${opacity};
  `;

  return (
    <Container>
      <Tween from={{ x: "200px" }} delay={0.5} opacity={0} duration={0.2}>
        <FixedLine />
      </Tween>
      <Tween from={{ x: "50px" }} delay={1} opacity={0} duration={0.2}>
        <NavbarContainer>
          <StyledDiv>
            <Ul>
              <Li>
                <Num>01.</Num>
                <a href="#project"> Projects</a>
              </Li>
              <Li>
                <Num>02.</Num>
                <a href="#about"> About</a>
              </Li>
              <Li>
                <Num>03.</Num>
                <a href="#contact"> Contact</a>
              </Li>
              <Li>
                <Num>
                  <AiOutlineCloudUpload />.
                </Num>
                <a href="#"> Resume</a>
              </Li>
            </Ul>
          </StyledDiv>
        </NavbarContainer>
      </Tween>
    </Container>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavbarContainer = styled.div`
  display: flex;
  margin: 0 380px 0 0;
  justify-content: center;
  padding: 2.5rem 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 60;
`;

const Li = styled.li`
  &:hover {
    color: #449ddb;
  }
`;

const Num = styled.span`
  color: ${({ theme }) => theme.headerColor};
  font-weight: 600;
`;

export default Navbar;
