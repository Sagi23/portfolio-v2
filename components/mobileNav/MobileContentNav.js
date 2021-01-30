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
          <a href="#"> Resume</a>
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
  gap: 3rem;
  flex-direction: column;
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

export default MobileContentNav;
