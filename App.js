import { StyleSheet, View } from "react-native";
import { useRoute } from "./router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

