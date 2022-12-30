import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import type { User } from "@/types/user";
import { getDatabase } from "@/utilities/notion";

import { Header } from "../features/userSelection/components/Header";
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
    <Flex h="100vh" direction="column" align="center" px={[50, 100, 150]}>
      <Header />
      <Flex
        color="white"
        w="100%"
        direction="column"
        align="center"
        mb={[10, 5]}
      >
        <Text fontSize="4xl">KIM JESTEŚ?</Text>
      </Flex>
      <Flex
        w="100%"
        h={[500, 500, 600]}
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {users.map((user, index) => (
          <UserTile
            key={index}
            name={user.properties.Name.title[0].text.content}
            roleColor={""}
            role={""}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default UserSelection;
