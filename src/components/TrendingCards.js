import { Flex } from "@chakra-ui/react";
import { TrendingSongs } from "../assets/placeholder/musicas";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
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
