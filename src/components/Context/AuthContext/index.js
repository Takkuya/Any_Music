import { createContext, useState, useEffect } from "react";
import { Songs } from "../../../assets/placeholder/songs";

export const AuthContext = createContext();

const redirect_uri = "http://localhost:3000/authcallback";
const client_id = "10e1e47286334993b0defbad88f750f1";
const client_s = "1a13098c61c943048f38d96046341144";
const scopes = "user-read-private user-read-email";

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  function getUserCredentials(search) {
    const code = search.split("code=")[1];
  }
  useEffect(() => {
    if (window.location.search.includes("code=")) {
      getUserCredentials(window.location.search);
    }
  }, []);

  function startAuthentication() {
    const query = `response_type=code&client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;

    window.location.href = "https://accounts.spotify.com/authorize?" + query;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        startAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
