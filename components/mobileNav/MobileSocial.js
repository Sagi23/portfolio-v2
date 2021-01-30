import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";

const MobileSocial = () => {
  return (
    <Ul>
      <Li>
        <a
          href="https://github.com/Sagi23"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiOutlineGithub />
        </a>
      </Li>
      <Li>
        <a
          href="https://www.linkedin.com/in/sagi-twig/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn />
        </a>
      </Li>
      <Li>
        <a href="#contact">
          <IoIosMail />
        </a>
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
