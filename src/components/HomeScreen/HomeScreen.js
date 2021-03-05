import { useState } from "react";

import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FireIcon, MusicIcon } from "../../assets/icons";

import TrendingCards from "./TrendingCards";
import AllSongsCards from "./AllSongsCards";

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState("trending");

  const current = {
    trending: {
      icon: <FireIcon />,
      text: "Trending Songs",
      component: <TrendingCards />,
    },
    all: {
      icon: <MusicIcon />,
      text: "All Songs",
      component: <AllSongsCards />,
    },
  };

  function changeCurrentPage() {
    const newPage = currentPage === "trending" ? "all" : "trending";
    setCurrentPage(newPage);
  }

  return (
    <>
      <Flex justify="flex-start" align="center" width="100%" background="#333">
        <Text
          fontWeight="semi-bold"
          color="white"
          fontSize="2xl"
          margin="1rem"
          width="100%"
        >
          <Flex align="center">
            {current[currentPage].icon}
            {current[currentPage].text}
            <Button
              marginLeft="auto"
              colorScheme="blue"
              onClick={() => changeCurrentPage()}
            >
              {currentPage === "trending"
                ? current.all.text
                : current.trending.text}
            </Button>
          </Flex>
        </Text>
      </Flex>
      <Box background="#404040">{current[currentPage].component} </Box>
    </>
  );
}
