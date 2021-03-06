import { useEffect, useState } from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import { Songs } from "../../assets/placeholder/songs";
export default function AlbumPages({ match }) {
  const [song, setSong] = useState({});
  const id = match.params.id;

  useEffect(() => {
    const selectedSong = Songs.find((songItem) => songItem.id === parseInt(id));
    if (selectedSong) {
      setSong(selectedSong);
    }
  }, [id]);
  return (
    <>
      <Box color="white" d="flex" justify="space-between">
        <Image src={song.imagem} alt={song.nome} boxSize="14.5rem" />
        <Text d="flex" align="center" fontSize="6xl" fontWeight="600">
          {song.nome}
        </Text>
      </Box>
    </>
  );
}
