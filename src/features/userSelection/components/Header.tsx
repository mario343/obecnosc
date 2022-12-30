import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      w="100%"
      align="center"
      justify="flex-end"
      borderBottomWidth={1}
      h={[100, 120]}
      mb={[5, 8, 10]}
    ></Flex>
  );
};

export { Header };
