import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";

export { StackRoutes } from "./StackRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
