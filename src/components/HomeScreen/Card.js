import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ itens }) {
  const { imagem, nome, data, banda, musicas } = itens;

  return (
    <>
      <Box
        color="white"
        background="#333"
        maxWidth="15rem"
        margin="1rem"
        width="100%"
        padding="0.5rem"
        cursor="pointer"
        _hover={{
          transition: "filter 0.2s",
          filter: "brightness(80%)",
        }}
      >
        <Image src={imagem} alt={banda} boxSize="14rem" />

        <Text
          fontSize="md"
          wordBreak="break-word"
          align="center"
          margin="0.5rem"
          fontWeight="semibold"
          _hover={{
            transition: "color 0.2s",
            color: "blue.500",
          }}
        >
          {nome}
        </Text>
        <Text
          fontSize="md"
          align="center"
          _hover={{
            transition: "color 0.2s",
            color: "blue.500",
          }}
        >
          <Link to="/artist">{banda}</Link>
        </Text>

        <Flex justify="space-between" align="center" margin="1rem">
          <Text fontSize="md">Ano: {data}</Text>
          <Text fontSize="md">Músicas: {musicas}</Text>
        </Flex>
      </Box>
    </>
  );
}
