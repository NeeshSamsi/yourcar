import React from "react";

// TWIN in STYLED
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

// Img
import McLarenCarImg from "../../../assets/mclaren-orange-big.png";
import BlobImg from "../../../assets/blob.svg";

const TopSectionContainer = styled.div`
  min-height: 500px;
  margin-top: 16rem;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;
const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    md:text-5xl
    sm:text-3xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}
`;

const BlobContainer = styled.div`
  width: 20rem;
  height: 10rem;
  position: absolute;
  right: -5rem;
  top: -9rem;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40rem;
    max-height: 10rem;
    right: -9rem;
    top: -16rem;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50rem;
    max-height: 30rem;
    right: -7rem;
    top: -15rem;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70rem;
    max-height: 30rem;
    right: -15rem;
    top: -25rem;
    transform: rotate(-20deg);
  }
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 10rem;
  right: -2rem;
  top: -5rem;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16rem;
    right: -6rem;
    top: -6rem;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 28rem;
    right: -8rem;
    top: -5rem;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30rem;
    right: -13rem;
    top: -9rem;
  }
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars With Us</Slogan>
        <Description>
          Always choose the best car from our local garages or order it remotely at the best price for you and get the
          best quality cars for as long as you like.
        </Description>
      </LeftContainer>

      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandAloneCar>
          <img src={McLarenCarImg} alt="" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
