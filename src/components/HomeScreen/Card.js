import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ itens }) {
  const { id, imagem, nome, data, banda, musicas } = itens;

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
          transform: "scale(1.04,1.04)",
          transition: "transform 0.2s ease",
        }}
      >
        <Link to={`/albumpage/${id}`}>
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
        </Link>
        <Text
          fontSize="md"
          align="center"
          _hover={{
            transition: "color 0.2s",
            color: "blue.500",
          }}
        >
          <Link to={`/artistpage/${id}`}>{banda}</Link>
        </Text>

        <Flex justify="space-between" align="center" margin="1rem">
          <Text fontSize="md">Ano: {data}</Text>
          <Text fontSize="md">Músicas: {musicas}</Text>
        </Flex>
      </Box>
    </>
  );
}
