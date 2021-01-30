import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <HeadTitle>
        <HeadBlue>01.</HeadBlue> Selected Projects
      </HeadTitle>
    </Container>
  );
};

const HeadTitle = styled.p`
  font-size: 25px;
  font-size: 3vw;
  text-align: center;
`;

const HeadBlue = styled.span`
  color: ${({ theme }) => theme.headerColor};
`;

const Container = styled.div`
  margin-top: 5rem;
  height: 100vh;
`;

export default Projects;
