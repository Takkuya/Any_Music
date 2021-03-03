import { Flex, Text, Button, Input } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex justify="space-between">
        <Text
          color="blue.500"
          fontSize="5xl"
          fontWeight="extrabold"
          marginX="1.5rem"
        >
          ANY MUSIC
        </Text>

        <Flex align="center">
          <Input
            placeholder="Pesquisar..."
            variant="flushed"
            color="#fff"
            width="30rem"
          />
        </Flex>

        <Flex align="center">
          <Button colorScheme="blue" variant="outline" marginX="1rem">
            Login
          </Button>
          <Button colorScheme="blue" marginX="1rem">
            Cadastro
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
