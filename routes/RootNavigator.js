import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Clientes from "../views/Clientes";
import Productos from "../views/Productos";
import Ventas from "../views/Ventas";
import AgregarCliente from "../views/AgregarCliente";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Ventas">
          <Stack.Screen name="Ventas" component={Ventas} />
          <Stack.Screen name="Productos" component={Productos} />
          <Stack.Screen name="Clientes" component={Clientes} />
          <Stack.Screen name="Agregar Cliente" component={AgregarCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
