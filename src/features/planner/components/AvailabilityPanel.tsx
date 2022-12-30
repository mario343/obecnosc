import { CheckIcon, CloseIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  IconButton,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { request } from "http";
import { useAtom } from "jotai";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useState } from "react";

import { loginAtom } from "@/features/login/atoms/login";

import { selectedDayAtom } from "../atoms/selectedDay";

const iconButtons = [
  {
    key: "available",
    label: "Dostępny",
    variant: "iconButton",
    colorScheme: "green",
    icon: <CheckIcon color="black" />,
  },
  {
    key: "maybe",
    label: "Może",
    variant: "iconButton",
    colorScheme: "yellow",
    icon: <QuestionIcon color="black" />,
  },
  {
    key: "unavailable",
    label: "Niedostępny",
    variant: "iconButton",
    colorScheme: "red",
    icon: <CloseIcon color="black" />,
  },
];

const AvailabilityPanel = () => {
  const [selectedDay] = useAtom(selectedDayAtom);
  const [loginState] = useAtom(loginAtom);
  const [state, setState] = useState({
    hourFrom: 8,
    hourTo: 22,
  });

  const dateOptions = {
    timeZone: "Europe/Zurich",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const dateAsFormattedString = dateFormatter.format(new Date(selectedDay));
  const isoDate = dateAsFormattedString;
  //const changeToISODate = new Date(dateAsFormattedString);
  //const iso = changeToISODate.toISOString();
  //DateAsFormattedString.toISOString()
  function handleChange({ name, value }: { name: string; value: string }) {
    setState({
      ...state,
      [name]: Number(value),
    });
  }
  const handleClick = async (name: string) => {
    if (state.hourFrom < state.hourTo) {
      const res = await fetch("http://localhost:3000/api/create-event", {
        method: "POST",
        body: JSON.stringify({
          selectedDay: dateAsFormattedString,

          startHour: state.hourFrom,
          stopHour: state.hourTo,

          loginState,
          state: {
            hourFrom: state.hourFrom,
            hourTo: state.hourTo,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //const data = await response.json();
      //this.setState({ postId: data.id });

      console.log(
        `${state.hourFrom}:00 - ${
          state.hourTo
        }:00 ${selectedDay.toLocaleString()} - ${name.toUpperCase()} - ${
          loginState.name ?? "niewiadomo"
        }`
      );
    } else {
      throw new Error("hourFrom > hourTo");
    }
  };

  return (
    <Flex color="white" w="100%" direction="column">
      <HStack gap={20} align="center" h="100px" pl={10}>
        <Text fontSize="xl">Dyspozycyjność</Text>
        <Flex align="center" justify="space-between" w="450px">
          <Flex align="center">
            <Text fontWeight="600" mr={6}>
              od
            </Text>
            <NumberInput
              w="150px"
              color="black"
              borderRadius="xl"
              h="45px"
              bg="white"
              name="hourFrom"
              min={8}
              max={21}
              value={state.hourFrom}
              onChange={(value) => handleChange({ name: "hourFrom", value })}
            >
              <NumberInputField
                placeholder="8"
                _placeholder={{
                  fontStyle: "italic",
                }}
                color="black"
                borderRadius="xl"
                h="45px"
              />
            </NumberInput>
          </Flex>
          <Flex align="center">
            <Text fontWeight="600" mr={6}>
              do
            </Text>
            <NumberInput
              w="150px"
              color="black"
              borderRadius="xl"
              h="45px"
              bg="white"
              name="hourTo"
              min={9}
              max={22}
              value={state.hourTo}
              onChange={(value) => handleChange({ name: "hourTo", value })}
            >
              <NumberInputField
                placeholder="22"
                _placeholder={{
                  fontStyle: "italic",
                }}
                color="black"
                borderRadius="xl"
                h="45px"
              />
            </NumberInput>
          </Flex>
        </Flex>
        <HStack gap={4}>
          {iconButtons.map((iconButton) => (
            <IconButton
              key={iconButton.key}
              aria-label={iconButton.label}
              colorScheme={iconButton.colorScheme}
              icon={iconButton.icon}
              onClick={() => void handleClick(iconButton.key)}
              w="50px"
              h="50px"
              borderRadius="xl"
            />
          ))}
        </HStack>
      </HStack>
    </Flex>
  );
};

export { AvailabilityPanel };
