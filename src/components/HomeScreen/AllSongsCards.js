import { Flex } from "@chakra-ui/react";
import { Songs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <Flex justify="flex-start" flexWrap="wrap" overflowY="scroll">
        {Songs.map((itens) => (
          <Card itens={itens} />
        ))}
      </Flex>
    </div>
  );
}
