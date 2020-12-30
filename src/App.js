import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

import data from "./data/data.json";

import Portfolio from "./pages/portfolio";
import CustomTitle from "./components/CustomTitle";
import ContactDetails from "./components/ContactDetails";

const StyledHeader = styled.header`
  min-height: 150px;
`;

const AppWrapper = styled.div`
  padding: 1.5rem;
  border: ${(props) => props.theme.borders.borderPrimary};
`;

const CustomName = styled.h2`
  font-family: "DINCondensed";
  font-weight: bold;
  font-size: 40px;
  background-color: white;
  text-transform: uppercase;
  padding: 1rem;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0.5rem;
  display: inline-block;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <StyledHeader>
          <ContactDetails contact={data.contactDetails} />
        </StyledHeader>
        <CustomName>My Trang Hong</CustomName>
        <Portfolio data={data} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
