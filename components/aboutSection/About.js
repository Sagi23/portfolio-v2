import React from "react";
import TechList from "./TechList";
import styled from "styled-components";
import { mediaQueries } from "../../styles/theme";

const About = () => {
  return (
    <Container id="about">
      <HeadTitle>
        <HeadBlue>02.</HeadBlue> About Me
      </HeadTitle>
      <SummaryContainer>
        <Summary>
          My name is Sagi Twig, i am a self taught, goal oriented frontend
          developer and a web designer located in Israel. <br /> I am passionate
          about responsive web design and providing engaging user experiences.
          <br />I belive that what set me apart from other developers is that i
          am a driven, ambitious and hard as well as smart working. <br /> I'm
          confident in my skills to tackle any obstacle to come.
          <br />
        </Summary>
      </SummaryContainer>
      <SummaryContainer>
        <Tech>
          Here are a few technologies I've been working with recently:
        </Tech>
        <TechList />
      </SummaryContainer>
    </Container>
  );
};

const HeadTitle = styled.p`
  font-size: 4vw;
  text-align: center;
  @media ${mediaQueries.md} {
    font-size: 10vw;
  }
`;

const SummaryContainer = styled.div`
  padding: 3rem 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.headerColor};
`;

const Summary = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const Tech = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.headerColor};
`;

const HeadBlue = styled.span`
  color: ${({ theme }) => theme.headerColor};
`;

const Container = styled.div`
  width: 60%;
  margin: 10rem auto 4rem;
  @media ${mediaQueries.mid} {
    width: 70%;
    margin-top: 7rem;
  }
`;

export default About;
