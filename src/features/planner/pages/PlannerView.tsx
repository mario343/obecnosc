import { Button, Flex } from "@chakra-ui/react";
import { addDays, startOfWeek } from "date-fns";
import type { NextPage } from "next";
import Head from "next/head";
import { useReducer } from "react";

import { callendarDatabaseId } from "@/pages";
import { getDatabase } from "@/utilities/notion";

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

const initialState = getCurrentWorkWeek();
const today = new Date();
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

const PlannerView: NextPage<{ credentials: any }> = ({ credentials }) => {
  const { callendar } = getCredentials(credentials);
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <Flex h="500px" w="90%" pt="30px">
          <table>
            <thead>
              <tr>
                <th>Availability</th>
                <th>Day</th>
                <th>Hour From</th>
                <th>Hour To</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {callendar.map((row, index) => (
                <tr key={index}>
                  <td>{row.AVAILABILITY}</td>
                  <td>{row.DAY}</td>
                  <td>{row.HOUR_FROM}</td>
                  <td>{row.HOUR_TO}</td>
                  <td>{row.USER}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Flex>
        <BottomSection selectedWeek={state} dispatch={dispatch} />
      </Flex>
    </>
  );
};

export { PlannerView };
