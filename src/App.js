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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <StyledHeader>
          <ContactDetails contact={data.contactDetails} />
        </StyledHeader>
        <CustomTitle title="My Trang Hong" />
        <Portfolio data={data} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
