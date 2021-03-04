import { useState } from "react";

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
} from "@chakra-ui/react";

import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icons";

export default function RegisterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
