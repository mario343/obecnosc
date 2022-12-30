// somehow date-fns imports are considered the same
/* eslint-disable import/no-duplicates */
import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { format, isSameDay } from "date-fns";
import { pl } from "date-fns/locale";
import { useAtom } from "jotai";

import { selectedDayAtom } from "../atoms/selectedDay";

const DAY_ITEM_HEIGHT = 600;
interface WeekViewProps {
  selectedWeek: Date[];
}

const DayItem = ({ day }: { day: Date }) => {
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  // const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  // const hourHeight = DAY_ITEM_HEIGHT / (hours.length - 1);

  return (
    <VStack w="100%" mx={20} px={1}>
      <Flex w="100%" justify="space-between" align="center" px={2}>
        <Text> {format(day, "EEE", { locale: pl }).toUpperCase()}</Text>
        <Text>{format(day, "dd.MM")}</Text>
      </Flex>
      <Box
        as="button"
        bg={isSameDay(day, selectedDay) ? "#b5b5b5" : "gray"}
        height={DAY_ITEM_HEIGHT}
        w="100%"
        borderRadius={8}
        borderWidth={isSameDay(day, selectedDay) ? 2 : 0}
        borderColor={isSameDay(day, selectedDay) ? "yellow.300" : "gray.200"}
        position="relative"
        _hover={{ shadow: "2xl", bg: "#b5b5b5" }}
        onClick={() => setSelectedDay(day)}
      >
        {/* {hours.map((hour, index) => (
          <Box
            width="100%"
            left={0}
            height={hourHeight}
            borderWidth={1}
            key={hour}
            position="absolute"
            top={index * hourHeight}
          >
            <Text key={hour}>{hour}:00</Text>
          </Box> 
        ))} */}
      </Box>
    </VStack>
  );
};

export const WeekView = ({ selectedWeek }: WeekViewProps) => {
  return (
    <HStack gap={1} w="100%">
      <SimpleGrid columns={6} w="90%" gap={2}>
        {selectedWeek.map((day) => (
          <DayItem day={day} key={day.getTime()} />
        ))}
      </SimpleGrid>
    </HStack>
  );
};
