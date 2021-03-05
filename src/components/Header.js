// import { useState } from "react";

import { Flex, Text, Input } from "@chakra-ui/react";
import LoginModal from "./Modals/LoginModal";
import RegisterModal from "./Modals/RegisterModal";

export default function Header() {
  // const [inputText, setInputText] = useState("");

  // function filterTasksHandler(e) {
  //   setInputText(e.target.value);

  //   console.log(inputText);
  // }

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
            // setInputText={setInputText}
            // onChange={filterTasksHandler}
          />
        </Flex>

        <Flex align="center">
          <LoginModal />
          <RegisterModal />
        </Flex>
      </Flex>
    </>
  );
}
