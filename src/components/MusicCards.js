import { Text, Flex } from "@chakra-ui/react";
import { FireIcon } from "../assets/icons";
import { musicas } from "../assets/placeholder/musicas";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="space-between" align="center" backgroundColor="#333">
        <Text fontWeight="semi-bold" color="white" fontSize="2xl" margin="1rem">
          <Flex align="center" justify="space-between">
            <FireIcon /> All Songs
          </Flex>
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        flexWrap="wrap"
        maxHeight="80vh"
        overflowY="scroll"
      >
        {musicas.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
