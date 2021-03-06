import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { mediaQueries } from "../../styles/theme";

const TechItem = ({ title, image }) => {
  return (
    <StyledDiv>
      <Image src={image} alt={title} width={70} height={70} />
      <p style={{ maxWidth: "70px", marginTop: "1rem" }}>{title}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.8rem;
  @media ${mediaQueries.md} {
    margin: 1rem;
  }
`;

export default TechItem;
