import { useContext } from "react";

import { Box, Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { FireIcon, MusicIcon } from "../../assets/icons";
import Card from "./Card";
import { SongContext } from "../Context/SongContext";

export default function HomeScreen() {
  const {
    currentPage,
    songData,
    setCurrentPage,
    changeCurrentPage,
  } = useContext(SongContext);
  const current = {
    trending: {
      icon: <FireIcon />,
      text: "Trending Songs",
    },
    all: {
      icon: <MusicIcon />,
      text: "All Songs",
    },
  };
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
              {current[currentPage === "trending" ? "all" : "trending"].text}
            </Button>
          </Flex>
        </Text>
      </Flex>
      <Box background="#404040">
        <SimpleGrid
          columns={{ sm: 2, md: 3, lg: 4, xl: 7 }}
          spacing="20px"
          overflowY="auto"
          margin="20px"
        >
          {songData.map((itens) => (
            <Card itens={itens} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
