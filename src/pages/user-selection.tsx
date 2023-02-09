import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

import type { User } from "@/types/user";
import { getDatabase } from "@/utilities/notion";

import { UserTile } from "../features/userSelection/components/UserTile";
import { usersDatabaseId } from ".";

export const getStaticProps = async () => {
  const usersDatabase = await getDatabase(usersDatabaseId);

  return {
    props: {
      users: usersDatabase,
      protected: true,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

const UserSelection: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <VStack h="100vh" align="center" justify="center" spacing="100px">
      <VStack w="90%" alignSelf="center">
        <Divider color="#e2265c" border="5px" borderRadius="full" />
        <Text fontSize="60px">KIM JESTEŚ?</Text>
      </VStack>
      <Flex w="100%" justify="center" align="center" flexWrap="wrap">
        {users.map((user, index) => (
          <UserTile
            key={index}
            name={user.properties.Name.title[0].text.content}
            roleColor={""}
            role={""}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default UserSelection;
