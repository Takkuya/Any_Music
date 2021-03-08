import { useContext, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";

import { ClosedEyeIcon, OpenEyeIcon, GoogleIcon } from "../../assets/icons";
import { AuthContext } from "../Context/AuthContext";

export default function RegisterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { startAuthentication } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Button colorScheme="blue" marginX="1rem" onClick={onOpen}>
        Cadastro
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white">
          <ModalHeader
            backgroundColor="blue.600"
            d="flex"
            align="center"
            justify="center"
            className="HeaderModal"
          >
            <Text>Cadastre-se</Text>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody backgroundColor="#404040">
            <FormControl align="center">
              <Button colorScheme="blue.600" padding="1rem" variant="solid">
                <Icon as={GoogleIcon} width="1.5rem" height="1.5rem" />
                <Text paddingLeft="0.4rem">Entrar com o Google</Text>
              </Button>
            </FormControl>
            <FormControl align="center">
              <Button
                colorScheme="blue.600"
                padding="1rem"
                variant="solid"
                onClick={startAuthentication}
              >
                <Icon as={GoogleIcon} width="1.5rem" height="1.5rem" />
                <Text paddingLeft="0.4rem">Entrar com o Spotify</Text>
              </Button>
            </FormControl>

            <FormControl marginY="0.5rem">
              <FormLabel>E-mail</FormLabel>
              <Input type="text" placeholder="E-mail" borderColor="#fff6" />
            </FormControl>
            <FormControl marginY="0.5rem">
              <FormLabel>Nome do usuário</FormLabel>
              <Input
                type="text"
                placeholder="Nome do usuário"
                borderColor="#fff6"
              />
            </FormControl>
            <FormLabel>Senha</FormLabel>
            <FormControl marginY="0.5rem">
              <Input
                paddingRight="2.2rem"
                placeholder="Senha"
                borderColor="#fff6"
                type={show ? "text" : "password"}
              />

              <InputRightElement height="100%" paddingX="1rem" cursor="pointer">
                {show ? (
                  <ClosedEyeIcon onClick={handleClick} />
                ) : (
                  <OpenEyeIcon onClick={handleClick} />
                )}
              </InputRightElement>
            </FormControl>
          </ModalBody>
          <ModalFooter backgroundColor="#404040">
            <Button
              colorScheme="blue"
              width="80%"
              marginX="auto"
              variant="outline"
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
