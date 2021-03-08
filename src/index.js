import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SongProvider } from "./components/Context/SongContext";

ReactDOM.render(
  <React.StrictMode>
    <SongProvider>
      <App />
    </SongProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
