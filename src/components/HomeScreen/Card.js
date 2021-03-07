import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ itens }) {
  const { id, image, name, releaseDate, artist, musics } = itens;

  return (
    <>
      <Box
        color="white"
        background="#333"
        padding="0.5rem"
        cursor="pointer"
        _hover={{
          transform: "scale(1.04,1.04)",
          transition: "transform 0.2s ease",
        }}
      >
        <Link to={`/albumpage/${id}`}>
          <Image
            src={image}
            alt={artist}
            maxWidth="100%"
            height="auto"
            width="100%"
          />

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
            {name}
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
          <Link to={`/artistpage/${id}`}>{artist}</Link>
        </Text>

        <Flex justify="space-between" align="center" margin="1rem">
          <Text fontSize="md">Ano: {releaseDate}</Text>
          <Text fontSize="md">Músicas: {musics}</Text>
        </Flex>
      </Box>
    </>
  );
}
