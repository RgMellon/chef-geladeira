import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#80A7AC",
      100: "rgba(128, 167, 172, 0.3)",
    },
    danger: {
      50: "#AC8085",
      100: "#AC8099",
      200: "#F89F9F",
    },

    tertiary: {
      50: "rgba(153, 172, 128, 0.4)",
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
