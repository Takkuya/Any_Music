import { useEffect, useState } from "react";
import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Songs } from "../../assets/placeholder/songs";
import { FillHeartIcon, PlusIcon } from "../../assets/icons";
// import Palette from "react-palette";

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
    // <Palette src={song.image}>
    //   {({ data, loading, error }) => (
    <Box
      width="100%"
      padding="1rem 10rem"
      // bgGradient="linear(to-b, #aadddd, #3333)"
      minHeight="100%"
      flex="1"
    >
      {/* {data} */}
      <Box color="white" d="flex" backgroundColor="#33333380">
        <Image
          src={song.image}
          alt={song.name}
          boxSize="12.5rem"
          margin="1rem"
        />

        <Box d="flex" marginTop="2.5rem" flexDir="column" marginLeft="1rem">
          <Text fontSize="md" fontWeight="700">
            {song.type}
          </Text>
          <Box>
            <Text
              d="flex"
              align="center"
              fontSize="5xl"
              fontWeight="bold"
              marginTop="-0.9rem"
            >
              {song.name}
            </Text>
          </Box>
          <Box
            d="flex"
            flexDir="row"
            alignItems="center"
            justify="flex-start"
            marginTop="4rem"
          >
            <Link to={`/artistpage/${id}`}>
              <Image
                src={song.artistImage}
                alt={song.artist}
                boxSize="1.8rem"
                borderRadius="1.5em"
                marginRight="0.5rem"
              />
            </Link>
            <Link to={`/artistpage/${id}`}>
              <Text
                fontWeight="600"
                _hover={{
                  transition: "color 0.2s",
                  color: "blue.600",
                }}
              >
                {song.artist}
              </Text>
            </Link>
            <Text marginLeft="0.6rem">- {song.musics} músicas - 32min 32s</Text>
          </Box>
        </Box>
        <Box d="flex" justify="flex-end" flexDir="column" flex="1" p={5}>
          <Text ml="auto" fontWeight="600">
            {song.releaseDate}
          </Text>

          <Box d="flex" mt="auto" alignItems="center" justifyContent="flex-end">
            <Icon
              as={PlusIcon}
              w={8}
              h={8}
              marginX="0.5rem"
              cursor="pointer"
              _hover={{ transition: "fill 0.2s", fill: "blue.600" }}
            />
            <Icon
              as={FillHeartIcon}
              w={8}
              h={8}
              cursor="pointer"
              _hover={{ transition: "fill 0.2s", fill: "red.400" }}
            />
          </Box>
        </Box>
      </Box>
      <Box color="white" backgroundColor="#33333380" marginTop="1rem">
        <Box d="flex" justifyContent="space-between" marginX="4rem">
          <Text marginRight="7rem">Título</Text>
          <Text>Duração</Text>
          <Text>Reproduções</Text>
        </Box>
        {song.musicsInfo &&
          song.musicsInfo.map(({ title, duration, playCount }, index) => (
            <>
              <Box
                d="flex"
                alignItems="center"
                justifyContent="space-between"
                marginY="1rem"
                marginX="1rem"
              >
                <Box
                  d="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  marginY="0.2rem"
                >
                  <Text>{index + 1}</Text>
                  <Box d="flex" flexDir="column" marginX="1.5rem">
                    <Text>{title}</Text>
                    <Link to={`/artistpage/${id}`}>
                      <Text
                        fontSize="sm"
                        color="fff"
                        opacity="0.7"
                        _hover={{
                          transition: "color 0.2s",
                          color: "blue.600",
                        }}
                      >
                        {song.artist}
                      </Text>
                    </Link>
                  </Box>
                  {/* <Image src={song.image} alt={title} boxSize="2.5rem" /> */}
                </Box>

                <Text>{duration}</Text>
                <Text marginRight="4rem">{playCount}</Text>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
}

//   );
// }
