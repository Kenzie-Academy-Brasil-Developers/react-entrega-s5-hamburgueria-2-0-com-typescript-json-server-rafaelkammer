import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Provider";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
