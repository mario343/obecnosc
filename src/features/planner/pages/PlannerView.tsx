import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Table,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { addDays, startOfWeek } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useReducer } from "react";

import { AvailabilityPanel } from "../components/AvailabilityPanel";
import { BottomSection } from "../components/Footer";
import { Header } from "../components/Header";
import { getCredentials } from "../components/utilities/getCredentials";
import { WeekView } from "../components/WeekView";

const getCurrentWorkWeek = () => {
  const days = [startOfWeek(new Date(), { weekStartsOn: 1 })];
  // iterate in for loop and add one day to each day
  for (let i = 1; i < 6; i++) {
    const nextDay = addDays(days[i - 1], 1);
    days.push(nextDay);
  }
  return days;
};

interface AvailabilityColors {
  AVAILABLE: string;
  MAYBE: string;
  UNAVAILABLE: string;
  [key: string]: string; // add index signature
}

const initialState = getCurrentWorkWeek();
export enum Action {
  "NEXT_WEEK" = "NEXT_WEEK",
  "PREVIOUS_WEEK" = "PREVIOUS_WEEK",
  "CURRENT_WEEK" = "CURRENT_WEEK",
  "TODAY" = "TODAY",
}

function reducer(state: Date[], action: { type: Action }) {
  switch (action.type) {
    case Action.PREVIOUS_WEEK:
      return state.map((day) => addDays(day, -7));
    case Action.NEXT_WEEK:
      return state.map((day) => addDays(day, 7));
    case Action.CURRENT_WEEK:
      return initialState;
    default:
      throw new Error();
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlannerView: NextPage<{ credentials: any }> = ({ credentials }) => {
  const availabilityColors: AvailabilityColors = {
    AVAILABLE: "green",
    MAYBE: "yellow",
    UNAVAILABLE: "red",
  };
  const { callendar } = getCredentials(credentials);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line import/no-named-as-default-member
  //const btnRef = React.useRef();
  return (
    <>
      <Head>
        <title>Obecność - planner </title>
        <meta name="description" content="Callendar app" />
      </Head>
      <Flex
        h="100vh"
        direction="column"
        align="center"
        suppressHydrationWarning
      >
        <Header />
        {/* <Button
          onClick={() => {
            console.log(callendar);
          }}
        >
          INFO
        </Button> */}

        <AvailabilityPanel />
        <WeekView selectedWeek={state} />
        <Flex h="500px" pt="30px" w="90%" align="center">
          <Button
            //ref={btnRef}
            variant="white"
            onClick={onOpen}
            w="300px"
          >
            Pokaż wszystkie aktywności
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            // finalFocusRef={btnRef}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="black" />
              <DrawerHeader color="black">Lista aktywności</DrawerHeader>

              <DrawerBody color="black">
                <Table
                  variant="simple"
                  size="sm"
                  colorScheme="gray"
                  // striped="true"
                >
                  <Thead>
                    <Tr>
                      <Th>Availability</Th>
                      <Th>Day</Th>
                      <Th>Hour From</Th>
                      <Th>Hour To</Th>
                      <Th>User</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {callendar
                      .sort(
                        (a, b) =>
                          new Date(
                            b.DAY.split(".").reverse().join("-")
                          ).getTime() -
                          new Date(
                            a.DAY.split(".").reverse().join("-")
                          ).getTime()
                      )
                      .map((row, index) => (
                        <Tr key={index}>
                          <Td>
                            <Tag
                              colorScheme={availabilityColors[row.AVAILABILITY]}
                            >
                              {row.AVAILABILITY}
                            </Tag>
                          </Td>
                          <Td>{row.DAY}</Td>
                          <Td>{row.HOUR_FROM}</Td>
                          <Td>{row.HOUR_TO}</Td>
                          <Td>{row.USER}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
        <BottomSection selectedWeek={state} dispatch={dispatch} />
      </Flex>
    </>
  );
};

export { PlannerView };
