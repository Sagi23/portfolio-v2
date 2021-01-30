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
  @media ${mediaQueries.mid} {
    font-size: 10vw;
  }
`;

const HeadBlue = styled.span`
  color: ${({ theme }) => theme.headerColor};
`;

const Container = styled.div`
  margin-top: 10rem;
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  @media ${mediaQueries.mid} {
    width: 70%;
    margin-top: 7rem;
  }
`;

export default Projects;
