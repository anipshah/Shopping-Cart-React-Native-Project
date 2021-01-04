import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./Component/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "./Component/Cart";
import "react-native-gesture-handler";
import Store from "./Store/index";
import { Provider } from "react-redux";

export default function App() {
  const Appstack = createStackNavigator();
  const HomeStack = () => {
    return (
      <Appstack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Appstack.Screen name="Home" component={Home} />
        <Appstack.Screen name="Cart" component={Cart} />
      </Appstack.Navigator>
    );
  };
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
