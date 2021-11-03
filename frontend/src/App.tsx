// Components
import HomePage from "./app/containers/HomePage";

// TWIN in STYLED
import styled from "styled-components";
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

const App = () => {
  return (
    <AppContainer>
      <HomePage></HomePage>
    </AppContainer>
  );
};

export default App;
