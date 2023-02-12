import { Button, Flex } from "@chakra-ui/react";
import { addDays, startOfWeek } from "date-fns";
import type { NextPage } from "next";
import { useReducer } from "react";

import { callendarDatabaseId, credentialsDatabaseId } from "@/pages";
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

export enum Action {
  "NEXT_WEEK" = "NEXT_WEEK",
  "PREVIOUS_WEEK" = "PREVIOUS_WEEK",
  "CURRENT_WEEK" = "CURRENT_WEEK",
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

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const PlannerView: NextPage<{ credentials: any }> = ({ credentials }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { callendar } = getCredentials(credentials);
  return (
    <Flex h="100vh" direction="column" align="center" px={150}>
      <Header />
      <Button
        onClick={() => {
          console.log(callendar);
        }}
      >
        INFO
      </Button>
      <AvailabilityPanel />
      <WeekView selectedWeek={state} />
      <BottomSection selectedWeek={state} dispatch={dispatch} />
    </Flex>
  );
};

export { PlannerView };
