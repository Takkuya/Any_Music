import { SimpleGrid } from "@chakra-ui/react";
import { TrendingSongs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 7 }}
        spacing="20px"
        overflowY="auto"
        margin="20px"
      >
        {TrendingSongs.map((itens) => (
          <Card itens={itens} />
        ))}
      </SimpleGrid>
    </div>
  );
}
