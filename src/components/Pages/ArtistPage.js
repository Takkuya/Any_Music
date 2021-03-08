import { useState, useEffect } from "react";

import { Text, Image, Box, Icon, SimpleGrid } from "@chakra-ui/react";
import { FillHeartIcon } from "../../assets/icons";
import { Songs } from "../../assets/placeholder/songs";

import { TrendingSongs } from "../../assets/placeholder/songs";
import Card from "../HomeScreen/Card";

export default function ArtistPage({ match }) {
  const [artist, setArtist] = useState({});
  const id = match.params.id;

  useEffect(() => {
    const selectedArtists = Songs.find(
      (artistItem) => artistItem.id === parseInt(id)
    );
    if (selectedArtists) {
      setArtist(selectedArtists);
    }
  }, [id]);

  return (
    <>
      <Box width="100%" padding="1rem 10rem" minHeight="100%" flex="1">
        <Box color="white" d="flex" backgroundColor="#33333380">
          <Image
            src={artist.artistImage}
            alt={artist.artist}
            boxSize="12.5rem"
            borderRadius="10.5em"
            margin="1rem"
          />

          <Box d="flex" marginTop="2.5rem" flexDir="column" marginLeft="1rem">
            <Box>
              <Text
                d="flex"
                align="center"
                fontSize="5xl"
                fontWeight="bold"
                marginTop="-0.6rem"
              >
                {artist.artist}
              </Text>
            </Box>
            <Box
              d="flex"
              flexDir="row"
              alignItems="center"
              justify="flex-start"
              marginTop="4rem"
            >
              <Text marginLeft="0.6rem">100.000 Ouvintes Mensais</Text>
            </Box>
          </Box>
          <Box d="flex" justify="flex-end" flexDir="column" flex="1" p={5}>
            <Icon
              as={FillHeartIcon}
              w={8}
              h={8}
              marginLeft="auto"
              cursor="pointer"
              _hover={{ transition: "fill 0.2s", fill: "red.400" }}
            />
          </Box>
        </Box>

        {/* {artist.artist === "Panic! At the Disco"
          ? console.log("Roberta")
          : console.log("Jorge")} */}
        <Text
          fontSize="4xl"
          color="white"
          marginTop="1rem"
          fontWeight="bold"
          paddingX="1rem"
        >
          Discografia
        </Text>

        <SimpleGrid
          columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          spacing="20px"
          overflowY="auto"
          margin="20px"
        >
          {TrendingSongs.map((itens) => (
            <Card itens={itens} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
