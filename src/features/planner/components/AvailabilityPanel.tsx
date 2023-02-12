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
    key: "AVAILABLE",
    label: "Dostępny",
    variant: "iconButton",
    colorScheme: "green",
    icon: <CheckIcon color="black" />,
  },
  {
    key: "MAYBE",
    label: "Może",
    variant: "iconButton",
    colorScheme: "yellow",
    icon: <QuestionIcon color="black" />,
  },
  {
    key: "UNAVAILABLE",
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
    HOUR_FROM: 8,
    HOUR_TO: 22,
  });
  const [status, setStatus] = useState({
    name: "",
    color: "",
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
    //  if (state.HOUR_FROM < state.HOUR_TO) {
    const res = await fetch("http://localhost:3000/api/makecallendar", {
      method: "POST",
      body: JSON.stringify({
        DAY: isoDate,
        HOUR_FROM: state.HOUR_FROM.toString(),
        HOUR_TO: state.HOUR_TO.toString(),

        AVAILABILITY: {
          name: status,
          color: "red",
        },
        USER: loginState?.name,
        //AVAILABILITY: "AVAILABLE",
        // HOUR_FROM: state.HOUR_FROM,
        // HOUR_TO: state.HOUR_TO,

        // loginState,
        // state: {
        //   HOUR_FROM: state.HOUR_FROM,
        //   HOUR_TO: state.HOUR_TO,
        // },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await response.json();
    // this.setState({ postId: data.id });

    // console.log(
    //   `${state.HOUR_FROM}:00 - ${
    //     state.HOUR_TO
    //   }:00 ${selectedDay.toLocaleString()} - ${name.toUpperCase()} - ${
    //     loginState.name ?? "niewiadomo"
    //   }`
    //);
    console.log(res);
    // } else {
    //   throw new Error("hourFrom > hourTo");
    // }
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
              name="HOUR_FROM"
              min={8}
              max={21}
              value={state.HOUR_FROM}
              onChange={(value) => handleChange({ name: "HOUR_FROM", value })}
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
              name="HOUR_TO"
              min={9}
              max={22}
              value={state.HOUR_TO}
              onChange={(value) => handleChange({ name: "HOUR_TO", value })}
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
              onClick={() => {
                void handleClick(iconButton.key);
                //setStatus(status.color = iconButton.key);
              }}
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
