import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import Clientes from "../views/Clientes";
import Productos from "../views/Productos";
import Ventas from "../views/Ventas";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, autenticate, logout] = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Ventas">
          <Stack.Screen name="Ventas" component={Ventas} />
          <Stack.Screen name="Productos" component={Productos} />
          <Stack.Screen name="Clientes" component={Clientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
