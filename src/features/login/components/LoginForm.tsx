/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useState } from "react";

import { loginAtom } from "../atoms/login";

function LoginForm({
  credentials,
}: {
  credentials: { login: string; password: string };
}) {
  const [loginState, setLoginState] = useAtom(loginAtom);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleClick = () => setShow(!show);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      login: { value: string };
      password: { value: string };
    };
    if (target.login.value === "123" && target.password.value === "123") {
      // authenticate user
      setLoginState({ ...loginState, authenticated: true });

      void router.replace("/user-selection");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <Flex flexDirection="column" minW={[300, 350, 350]}>
      <form onSubmit={handleSubmit}>
        <InputGroup mb="35px" role="group">
          <Input
            w="100%"
            name="login"
            h="65px"
            color="white"
            placeholder="LOGIN"
            _groupHover={{
              background: "white",
              color: "#2d2e2d",
            }}
            _placeholder={{
              fontWeight: "850",
              pl: [100, 100, 115],
              pt: "9px",
              letterSpacing: "1px",
              color: "white",
              fontSize: "19px",
              fontStyle: "italic",
              _groupHover: { color: "#9D9D9D" },
            }}
            border="4px"
            borderRadius="2xl"
            focusBorderColor="white"
          />
        </InputGroup>

        <InputGroup size="md" mb={[51, 51, 61]} role="group">
          <Input
            w="100%"
            h="65px"
            name="password"
            border="4px"
            type={show ? "text" : "password"}
            color="white"
            placeholder="HASŁO"
            _groupHover={{
              background: "white",
              color: "#2d2e2d",
            }}
            _placeholder={{
              fontWeight: "850",
              pl: [100, 100, 115],
              pt: "9px",
              letterSpacing: "1px",
              color: "white",
              fontSize: "19px",
              fontStyle: "italic",
              _groupHover: { color: "#9D9D9D" },
            }}
            borderRadius="2xl"
            focusBorderColor="white"
          />
          <InputRightElement width="90px" height="66px" mr="5px">
            <Button
              size="sm"
              onClick={handleClick}
              variant="outline"
              color="white"
              border="none"
              colorScheme="none"
              outlineColor="none"
              _groupHover={{ color: "#9D9D9D" }}
            >
              {show ? "Ukryj" : "Pokaż"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          w="50px"
          h="50px"
          color="#5AC072"
          background="#2d2e2d"
          borderRadius="full"
          fontWeight="700"
          ml={[125, 150, 150]}
          type="submit"
          letterSpacing="13px"
          fontSize="22px"
          border="4px"
          borderColor="#5AC072"
          _hover={{
            background: "#5AC072",
            color: "white",
            borderColor: "white",
          }}
        >
          <Center ml="11px">➔</Center>
        </Button>
      </form>
    </Flex>
  );
}

export { LoginForm };
