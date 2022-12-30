import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

//import { getCredentials } from "@/features/login/components/utilities/getCredentials";
//import { getDatabase } from "@/utilities/notion";

import { LoginForm } from "../features/login/components/LoginForm";

// export const usersDatabaseId = process.env.NOTION_USERS_DATABASE_ID as string;
// export const credentialsDatabaseId = process.env
//   .CREDENTIALS_DATABASE_ID as string;
// export const mondayScheduleDatabaseId = process.env
//   .NOTION_MONDAY_SCHEDULE_DATABASE_ID as string;

// export const getStaticProps = async () => {
//   const credentials = await getDatabase(credentialsDatabaseId);

//   return {
//     props: {
//       credentials,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 1, // In seconds
//   };
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage<{ credentials: any }> = ({ credentials }) => {
  // const { login, password } = getCredentials(credentials);
  return (
    <Flex h="100vh" direction="column" align="center" justify="flex-end">
      <Flex mb="80px" w="100%" alignSelf="start">
        <Flex flexDirection="column" ml={[45, 100, 420]}>
          <Text
            fontWeight="semibold"
            fontSize={[50, 50, 70]}
            height={[16, 50, 85]}
            color="white"
            letterSpacing="3px"
          >
            OBECNOŚĆ
          </Text>
          <Flex
            h="9px"
            mt="4px"
            borderRadius="full"
            bgGradient="linear(to-r, #FFEE88, #DD1155)"
          ></Flex>
        </Flex>
      </Flex>

      <Flex px={4} py={4} mb={[100, 150, 250]}>
        <LoginForm
        //  credentials={{ password, login }}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
