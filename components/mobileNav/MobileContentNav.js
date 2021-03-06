import React from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

const MobileContentNav = () => {
  return (
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
          <a href="/resume.pdf" target="_blank">
            {" "}
            Resume
          </a>
        </Li>
      </Ul>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.body};
`;
const Ul = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  margin: 1.5rem 0;
  flex-direction: column;
`;

const Li = styled.li`
  margin: 1rem 0;

  &:hover {
    color: #449ddb;
  }
`;

const Num = styled.span`
  color: ${({ theme }) => theme.headerColor};
  font-weight: 600;
`;

export default MobileContentNav;
