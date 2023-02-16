import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { ChakraProvider as Provider, extendTheme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    textTransform: "uppercase",
    fontStyle: "Lato",
    width: "125px",
    height: "18px",
    borderRadius: "3xl",
    fontWeight: "700",
    fontSize: "14px",
  },
  variants: {
    white: {
      color: "black",
      background: "white",
    },
    black: {
      color: "white",
      background: "#2d2e2d",
      variant: "outline",
      border: "2px",
      _active: {
        color: "#2d2e2d",
        backgroundColor: "white",
      },
      _hover: {
        background: "#2d2e2d",
        color: "white",
      },
      borderColor: "white",
    },
    arrow: {
      w: "10px",
      color: "white",
      borderRadius: "full",
      fontSize: "10px",
      bg: "#2d2e2d",
      border: "2px",
      _hover: {
        background: "#2d2e2d",
        color: "white",
      },
      _active: {
        bg: "white",
        color: "#2d2e2d",
      },
    },
    iconButton: {
      w: "50px",
      h: "50px",
      borderRadius: "xl",
    },
  },
};

export { Button };
