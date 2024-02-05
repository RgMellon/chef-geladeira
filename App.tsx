import { NativeBaseProvider, Box } from "native-base";
import React from "react";

import {
  useFonts,
  Inter_100Thin,
  Inter_300Light,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { ActivityIndicator, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "./src/theme";

import { Routes } from "./src/routes";
import { WelcomeProvider } from "./src/contexts/WelcomeContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_300Light,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#dcd7d751"
      />

      <NativeBaseProvider theme={theme}>
        <WelcomeProvider>
          <Routes />
        </WelcomeProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
