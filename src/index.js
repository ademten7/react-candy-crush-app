import React from "react";
import App from "./App.js";
import Container from "./Context/Container";
import reactDOM from "react-dom";

reactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById("root")
);
