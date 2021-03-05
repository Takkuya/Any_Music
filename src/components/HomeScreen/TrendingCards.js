import { Flex } from "@chakra-ui/react";
import { TrendingSongs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="flex-start" flexWrap="wrap" overflowY="scroll">
        {TrendingSongs.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
