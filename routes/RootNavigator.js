import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/Login";

import Home from "../views/Home";
import Reservas from "../views/Reservas";
import Pacientes from "../views/Pacientes";
import useAuth from "../hooks/useAuth";
import ReservasAlta from "../views/ReservasAlta";
import AgregarPacientes from "../views/AgregarPacientes";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, autenticate, logout] = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
              <Stack.Screen name="Pacientes" component={Pacientes} />
              <Stack.Screen name="AgregarPacientes" component={AgregarPacientes} />
            <Stack.Screen name="Reservas" component={Reservas} />
            <Stack.Screen name="AltaReservas" component={ReservasAlta} />


          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
