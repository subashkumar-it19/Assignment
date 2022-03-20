import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Form from "./components/Form1";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
