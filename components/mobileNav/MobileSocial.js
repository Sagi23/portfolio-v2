import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";

const MobileSocial = () => {
  return (
    <Ul>
      <Li>
        <AiOutlineGithub />
      </Li>
      <Li>
        <FaLinkedinIn />
      </Li>
      <Li>
        <IoIosMail />
      </Li>
    </Ul>
  );
};

const Li = styled.li`
  margin-top: 4rem;
  color: ${({ theme }) => theme.body};
  &:hover {
    color: #449ddb;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 25px;
  gap: 3rem;
`;
export default MobileSocial;
