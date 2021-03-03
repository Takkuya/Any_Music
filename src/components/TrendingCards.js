import { Flex } from "@chakra-ui/react";
import { TrendingSongs } from "../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="space-between" flexWrap="wrap" overflowY="scroll">
        {TrendingSongs.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
