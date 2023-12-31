import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizProvider } from "./contexts/QuizContext";
// import Challenge from "./components/Challenge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
      {/* <Challenge /> */}
    </QuizProvider>
  </React.StrictMode>
);
