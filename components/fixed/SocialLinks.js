import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Tween } from "react-gsap";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Container>
      <Tween from={{ y: "-200px" }} delay={2} opacity={0} duration={0.2}>
        <FixedLine />
      </Tween>
      <Tween from={{ y: "-50px" }} delay={2.5} opacity={0} duration={0.2}>
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
      </Tween>
    </Container>
  );
};

const FixedLine = styled.div`
  background-color: ${({ theme }) => theme.fontColor};
  width: 1px;
  position: fixed;
  top: 0;
  left: 3rem;
  height: 220px;
`;
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
`;

const Li = styled.li`
  margin-top: 1rem;
  &:hover {
    color: #449ddb;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  margin: 240px 2.2rem;
  list-style: none;
  font-size: 25px;
`;

export default SocialLinks;
