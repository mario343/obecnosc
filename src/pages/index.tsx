import { Flex, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { getCredentials } from "@/features/login/components/utilities/getCredentials";
import { getDatabase } from "@/utilities/notion";

import { LoginForm } from "../features/login/components/LoginForm";
export const usersDatabaseId = "6f6713ff0a044c0485bccaabb03c2349";
export const credentialsDatabaseId = "99724a9083a14e22bc8a4986d9351e6a";
export const callendarDatabaseId = "e8c504c3dd8446cd9839a52067fa87bc";

export const getStaticProps = async () => {
  const credentials = await getDatabase(credentialsDatabaseId);

  return {
    props: {
      credentials,
    },
    // Next.js will attempt to re-generate the page:-
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage<{ credentials: any }> = ({ credentials }) => {
  const { login, password } = getCredentials(credentials);
  return (
    <>
      <Head>
        <title>Obecność</title>
        <meta name="description" content="Callendar app" />
      </Head>
      <Stack h="100vh" align="center" justify="flex-end">
        <Flex mb="80px">
          <Flex flexDirection="column">
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

        <Flex px={4} py={4} pb={[100, 100, 250, 200, 150, 250]}>
          <LoginForm credentials={{ login, password }} />
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
