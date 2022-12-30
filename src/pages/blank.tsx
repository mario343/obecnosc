import { Flex, Input, Switch } from "@chakra-ui/react";

export default function blank() {
  return (
    <Flex
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      bg="black"
    >
      <Flex
        h="500px"
        w="500px"
        bg="white"
        justify="space-around"
        align="center"
        flexDirection="row"
      >
        <Input
          type="text"
          variant="outline"
          placeholder="Text Here"
          isInvalid={false}
        />
        <Input
          type="text"
          variant="outline"
          placeholder="Text Here"
          isInvalid={true}
        />
      </Flex>
    </Flex>
  );
}
