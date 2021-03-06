import { SimpleGrid } from "@chakra-ui/react";
import { TrendingSongs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <SimpleGrid minChildWidth="252px" spacing="20px" overflowY="scroll">
        {TrendingSongs.map((itens) => (
          <Card itens={itens} />
        ))}
      </SimpleGrid>
    </div>
  );
}
