import { Text, Flex, Button } from "@chakra-ui/react";
import { FireIcon } from "../assets/icons";
import { TrendingSongs } from "../assets/placeholder/musicas";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="space-between" align="center" width="100%">
        <Text
          fontWeight="semi-bold"
          color="white"
          fontSize="2xl"
          margin="1rem"
          width="100%"
        >
          <Flex align="center">
            <FireIcon /> Trending Songs
            <Button marginLeft="auto" colorScheme="blue">
              All
            </Button>
          </Flex>
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        flexWrap="wrap"
        maxHeight="80vh"
        overflowY="scroll"
      >
        {TrendingSongs.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
