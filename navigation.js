import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetailScreen from "./screens/ResturantDetailScreen";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompletedScreen from "./screens/OrderCompletedScreen";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ResturantDetailScreen"
            component={ResturantDetailScreen}
          />
          <Stack.Screen
            name="OrderCompletedScreen"
            component={OrderCompletedScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
