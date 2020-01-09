import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import history from "./services/history";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Routes from "./Routes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <Header />
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
