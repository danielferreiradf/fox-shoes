import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Routes from "./Routes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <Header />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
