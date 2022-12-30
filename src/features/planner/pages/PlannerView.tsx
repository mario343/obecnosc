import { Flex } from "@chakra-ui/react";
import { addDays, startOfWeek } from "date-fns";
import { useReducer } from "react";

import { AvailabilityPanel } from "../components/AvailabilityPanel";
import { BottomSection } from "../components/Footer";
import { Header } from "../components/Header";
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

const PlannerView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Flex h="100vh" direction="column" align="center" px={150}>
      <Header />
      <AvailabilityPanel />
      <WeekView selectedWeek={state} />
      <BottomSection selectedWeek={state} dispatch={dispatch} />
    </Flex>
  );
};

export { PlannerView };
