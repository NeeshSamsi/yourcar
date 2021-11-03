import React from "react";

// Components
import NavBar from "../../components/NavBar";

// TWIN in STYLED
import styled from "styled-components";
import tw from "twin.macro";

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
    </PageContainer>
  );
};

export default HomePage;
