import React from "react";
import Image from "next/image";
import styled from "styled-components";

const TechItem = ({ title, image }) => {
  return (
    <StyledDiv>
      <Image src={image} alt={title} width={70} height={70} />
      <p style={{ maxWidth: "70px" }}>{title}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default TechItem;
