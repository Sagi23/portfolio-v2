import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../styles/theme";

const Form = () => {
  return (
    <Container id="contact">
      <HeadTitle>
        <HeadBlue>03.</HeadBlue> Contact Me
      </HeadTitle>
      <SummaryContainer>
        <Summary>
          Whether you have any question or just want to say hi, Feel free to
          contact me, I will get back to you as soon as possible!
        </Summary>
      </SummaryContainer>
      <StyledForm
        id="my-form"
        action="https://formspree.io/f/mnqobyjp"
        method="POST"
      >
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <input type="email" name="email" id="email" required />
        <StyledLabel htmlFor="massage">Message:</StyledLabel>
        <textarea
          name="massage"
          id="massage"
          cols="30"
          rows="10"
          style={{ resize: "none" }}
          required
        />
        <StyledButton id="my-form-button">Send</StyledButton>
      </StyledForm>
    </Container>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 50%;
  margin: 0 auto;
  @media ${mediaQueries.md} {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin: 1rem 0;
`;

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
  margin: 10rem auto 4rem;
  @media ${mediaQueries.mid} {
    width: 70%;
    margin-top: 7rem;
  }
`;

const StyledButton = styled.button`
  margin-top: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.fontColor};
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.body};
    transition: all 0.3s;
  }
`;

const SummaryContainer = styled.div`
  padding: 3rem 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.headerColor};
  width: 50%;
  margin: 0 auto;
  @media ${mediaQueries.md} {
    width: 100%;
  }
`;

const Summary = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

export default Form;
