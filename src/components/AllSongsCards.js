import { Flex } from "@chakra-ui/react";
import { Songs } from "../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="space-between" flexWrap="wrap" overflowY="scroll">
        {Songs.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
