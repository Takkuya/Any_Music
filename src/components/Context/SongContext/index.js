import { Songs } from "../../../assets/placeholder/songs";
import { createContext, useState } from "react";
import { getTrendingSongs } from "./utils";
export const SongContext = createContext();

export function SongProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("trending");
  const [songData, setSongData] = useState(getTrendingSongs(Songs));

  function changeCurrentPage() {
    const newPage = currentPage === "trending" ? "all" : "trending";

    setCurrentPage(newPage);
    if (newPage === "all") {
      setSongData(Songs);
    } else {
      setSongData(getTrendingSongs(Songs));
    }
  }

  return (
    <SongContext.Provider
      value={{
        currentPage,
        songData,
        setCurrentPage,
        changeCurrentPage,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}
