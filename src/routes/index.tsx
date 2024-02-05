import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppRoutes } from "./app.routes";
import { useWelcome } from "../hooks/useWelcome";
import { Welcome } from "../screens/Welcome";

export function Routes() {
  const { show } = useWelcome();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <NavigationContainer>
        {show ? <Welcome /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}
