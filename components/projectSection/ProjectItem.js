import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";
import { mediaQueries } from "../../styles/theme";

import Image from "next/image";

const ProjectItem = ({ title, description, tags, demo, github, image }) => {
  return (
    <Container>
      <ImgContainer>
        <StyledA href={demo} target="_blank" rel="noreferrer noopener">
          <Image src={image} alt={title} width={640} height={470} />
        </StyledA>
        <StyledDiv>
          <Links href={demo} target="_blank" rel="noreferrer noopener">
            <RiExternalLinkFill />
          </Links>
          <Links href={github} target="_blank" rel="noreferrer noopener">
            <AiOutlineGithub />
          </Links>
        </StyledDiv>
      </ImgContainer>
      <DetailContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <TagsContainer>
          {tags.map((tag) => (
            <Tags key={tag}>{tag}</Tags>
          ))}
        </TagsContainer>
      </DetailContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 5rem 0;
  @media ${mediaQueries.mid} {
    flex-direction: column;
    margin: 3rem 0;
  }
`;

const ImgContainer = styled.div`
  flex-grow: 2;
  max-width: 70%;
  display: flex;
  @media ${mediaQueries.mid} {
    max-width: 100%;
    justify-content: center;
  }
`;

const DetailContainer = styled.div`
  position: absolute;
  width: 70%;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: right;
  @media ${mediaQueries.mid} {
    position: relative;
    width: 100%;
    margin: 2rem 0;
  }
`;

const DescriptionContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.descriptionColor};
  box-shadow: -2px 2px 15px 4px rgba(0, 0, 0, 0.35);
  margin: 3rem 0;
`;

const Description = styled.p`
  font-size: 25px;
  text-align: right;
  line-height: 1.5;
  @media ${mediaQueries.mid} {
    text-align: center;
  }
  @media ${mediaQueries.md} {
    font-size: 18px;
  }
`;

const StyledA = styled.a`
  filter: grayscale(90%);
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    filter: none;
  }
`;

const TitleContainer = styled.div`
  text-align: right;
  @media ${mediaQueries.mid} {
    text-align: center;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.headerColor};
  font-size: 35px;
`;

const Links = styled.a`
  font-size: 30px;
  margin-left: 1rem;
  z-index: 50;
  align-self: baseline;
  &:hover {
    color: ${({ theme }) => theme.headerColor};
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  @media ${mediaQueries.mid} {
    flex-direction: column;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  @media ${mediaQueries.mid} {
    justify-content: center;
  }
`;

const Tags = styled.p`
  text-align: right;
  margin-left: 1rem;
`;

export default ProjectItem;
