import { Avatar, Button, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useRouter } from "next/router";

import { loginAtom } from "@/features/login/atoms/login";

const Header = () => {
  const [loginState, setLoginState] = useAtom(loginAtom);
  const router = useRouter();

  const logout = () => {
    void router.replace("/");
    setLoginState(RESET);
  };

  return (
    <Flex
      w="100%"
      align="center"
      h="70px"
      mb={2}
      mt={65}
      pt={2}
      justify="space-between"
      borderBottomWidth={1}
    >
      <Flex w={[335]}>
        <Button variant="white" w="200px">
          MÓJ PLAN
        </Button>

        <Button variant="black" ml="10px">
          ZESPÓŁ
        </Button>
      </Flex>

      <Flex w={[175]}>
        <Avatar
          mr="10px"
          w="40px"
          h="40px"
          name={loginState?.name ?? "Niewiadomo"}
          color="white"
          border="2px"
          bg="gray"
        />

        <Button variant="black" onClick={logout}>
          WYJDŹ
        </Button>
      </Flex>
    </Flex>
  );
};

export { Header };
