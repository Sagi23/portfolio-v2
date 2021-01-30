import React from "react";
import techData from "./techData";
import TechItem from "./TechItem";
import styled from "styled-components";

const TechList = () => {
  const renderdData = techData.map((t) => (
    <TechItem title={t.title} image={t.image} key={t.id} />
  ));
  return <StyledDiv>{renderdData}</StyledDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export default TechList;
