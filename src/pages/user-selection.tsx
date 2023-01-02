import { Divider, Flex, Stack, Text } from "@chakra-ui/react";
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
    <Stack h="100vh" align="center" justify="center" spacing={40}>
      <Stack h="120px" w="90%" spacing={10} pt="20px">
        <Divider color="#e2265c" border="5px" borderRadius="full" />
        <Text fontSize="60px" alignSelf="center">
          KIM JESTEŚ?
        </Text>
      </Stack>
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
    </Stack>
  );
};

export default UserSelection;
