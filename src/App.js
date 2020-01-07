import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./Routes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
