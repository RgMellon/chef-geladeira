import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#80A7AC",
    },

    danger: {
      50: "#AC8085",
      100: "#AC8099",
      150: "#F89F9F",
    },

    tertiary: {
      100: "#99AC80",
    },

    gray: {
      100: "#565656",
    },
  },

  fonts: {
    heading: "Inter_700Bold",
    body: "Inter_500Medium",
    mono: "Inter_300Light",
  },
});
