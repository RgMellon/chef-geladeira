import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { RecipeDetail } from "../screens/RecipeDetail";
import { Welcome } from "../screens/Welcome";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="recipeDetail" component={RecipeDetail} />
    </Navigator>
  );
}
