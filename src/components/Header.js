// import { useState } from "react";

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "../assets/icons";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <Text
            color="blue.500"
            fontSize="5xl"
            fontWeight="extrabold"
            marginX="1.5rem"
          >
            ANY MUSIC
          </Text>
        </Link>

        <Flex align="center">
          <InputGroup>
            <InputLeftAddon
              children={<SearchIcon className="search-icon" />}
              background="#0000"
              border="none"
            />
            <Input
              placeholder="Pesquisar..."
              variant="flushed"
              color="#fff"
              width="30rem"
              // setInputText={setInputText}
              // onChange={filterTasksHandler}
            />
          </InputGroup>
        </Flex>

        <Flex align="center">
          <LoginModal />
          <RegisterModal />
        </Flex>
      </Flex>
    </>
  );
}
