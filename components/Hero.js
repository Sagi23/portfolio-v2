import React, { useEffect, useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { gsap } from "gsap";
import styled from "styled-components";

const Hero = () => {
  const tweenWords = useRef(null);
  const contain = useRef(null);
  const scroller = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scroller.current, { y: -30, duration: 2, ease: "linear" });
    tl.to(scroller.current, { y: -30, duration: 2, ease: "linear" });
  }, []);

  return (
    <Container ref={contain}>
      <Ibuild>I Build</Ibuild>
      <CangingWords ref={tweenWords}>Reliable</CangingWords>
      <WebApp>Web Applications</WebApp>
      <ScroolDown ref={scroller}>
        <BsChevronDoubleDown />
      </ScroolDown>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  max-width: 60%;
  margin: 10rem auto 0;
  height: 100vh;
`;

const ScroolDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 48%;
  font-size: 50px;
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
