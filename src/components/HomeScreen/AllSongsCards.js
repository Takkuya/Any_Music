import { SimpleGrid } from "@chakra-ui/react";
import { Songs } from "../../assets/placeholder/songs";
import Card from "./Card";

export default function TrendingCards() {
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 7 }}
      spacing="20px"
      overflowY="auto"
      margin="20px"
    >
      {Songs.map((itens) => (
        <Card itens={itens} />
      ))}
    </SimpleGrid>
  );
}
