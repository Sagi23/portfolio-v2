import React, { useEffect, useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import styled from "styled-components";

const Hero = () => {
  const scroller = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scroller.current, { y: -30, duration: 2, ease: "linear" });
    tl.to(scroller.current, { y: -30, duration: 2, ease: "linear" });
  }, []);

  return (
    <Container>
      <Ibuild>I Build</Ibuild>

      <CangingWords>
        <div>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Reliable")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Beautiful")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Performant")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </CangingWords>
      <StyledP>Web Applications</StyledP>
      <ScroolDown ref={scroller}>
        <BsChevronDoubleDown />
      </ScroolDown>
    </Container>
  );
};

const StyledP = styled.p`
  font-weight: 700;
  font-size: 6rem;
  text-align: end;
  font-size: 5vw;
  margin-top: 3rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto 0;
  height: 100vh;
`;

const ScroolDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 48%;
  font-size: 50px;
`;

const Ibuild = styled.p`
  font-size: 6rem;
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 5vw;
`;

const CangingWords = styled.p`
  font-size: 9rem;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 10vw;
  color: ${({ theme }) => theme.headerColor};
`;

export default Hero;
