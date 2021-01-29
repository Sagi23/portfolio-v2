import React, { useRef } from "react";
import styled from "styled-components";

const Hero = () => {
  const tweenWords = useRef(null);
  const contain = useRef(null);
  return (
    <Container ref={contain}>
      <Ibuild>I Build</Ibuild>
      <CangingWords ref={tweenWords}>Reliable</CangingWords>
      <WebApp>Web Applications</WebApp>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  max-width: 60%;
  margin: 10rem auto 0;
  height: 80vh;
`;

const WebApp = styled.p`
  font-weight: 700;
  font-size: 6rem;
  text-align: end;
  margin-top: 6rem;
`;

const Ibuild = styled.p`
  font-size: 6rem;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const CangingWords = styled.p`
  font-size: 9rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export default Hero;
