import { useState } from "react";
import { ChakraProvider, Box, Flex, Text, Button } from "@chakra-ui/react";
import { FireIcon, MusicIcon } from "./assets/icons/index";
import "./styles/globalStyle.css";
import Header from "./components/Header";
import TrendingCards from "./components/TrendingCards";
import AllMusicCards from "./components/AllMusicCards";

function App() {
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
      component: <AllMusicCards />,
    },
  };

  function changeCurrentPage() {
    const newPage = currentPage === "trending" ? "all" : "trending";
    setCurrentPage(newPage);
  }

  return (
    <ChakraProvider>
      <div className="App">
        <Box background="#333">
          <Header />
        </Box>
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          background="#333"
        >
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
        <Box background="#404040">{current[currentPage].component}</Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
