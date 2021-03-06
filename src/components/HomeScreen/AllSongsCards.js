import { SimpleGrid } from "@chakra-ui/react";
import { Songs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <SimpleGrid minChildWidth="252px" spacing="20px" overflowY="scroll">
        {Songs.map((itens) => (
          <Card itens={itens} />
        ))}
      </SimpleGrid>
    </div>
  );
}
