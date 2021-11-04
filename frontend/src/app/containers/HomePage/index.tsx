import React from "react";

// Components
import NavBar from "../../components/NavBar";
import TopSection from "./topSection";
import BookCard from "../../components/BookCard";
import BookingSteps from "./BookingSteps";

// TWIN in STYLED
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/Marginer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4rem" />
      <BookCard />
      <Marginer direction="vertical" margin="8rem" />
      <BookingSteps />
    </PageContainer>
  );
};

export default HomePage;
