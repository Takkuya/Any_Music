import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SongProvider } from "./components/Context/SongContext";
import { AuthProvider } from "./components/Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SongProvider>
        <App />
      </SongProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
