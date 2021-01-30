import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import { mediaQueries } from "../../styles/theme";

const Projects = () => {
  return (
    <Container id="project">
      <HeadTitle>
        <HeadBlue>01.</HeadBlue> Selected Projects
      </HeadTitle>
      <ProjectList />
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

const HeadBlue = styled.span`
  color: ${({ theme }) => theme.headerColor};
`;

const Container = styled.div`
  width: 60%;
  margin: 10rem auto 0;
  @media ${mediaQueries.mid} {
    width: 70%;
    margin-top: 7rem;
  }
`;

export default Projects;
