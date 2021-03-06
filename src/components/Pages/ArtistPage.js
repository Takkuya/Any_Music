import { useState, useEffect } from "react";

import { Text, Image } from "@chakra-ui/react";
import { Songs } from "../../assets/placeholder/songs";

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
      <Image src={artist.image} alt={artist.name} />
      <Text>{artist.name}</Text>
    </>
  );
}
