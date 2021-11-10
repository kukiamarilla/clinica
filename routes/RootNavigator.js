import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/Login";
<<<<<<< HEAD
// import Reservas from "../views/Reservas";
import Home from "../views/Home";
import Paciente from "../views/Paciente";
import Reservas from "../views/Reservas";
=======
import Reservas from "../views/Reservas";
import Pacientes from "../views/Pacientes";
>>>>>>> 96bd0bdc465cc0227a66c3702c3c8f48ce3801b1
import useAuth from "../hooks/useAuth";
import ReservasAlta from "../views/ReservasAlta";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, autenticate, logout] = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Reservas" component={Reservas} />
            <Stack.Screen name="AltaReservas" component={ReservasAlta} />
            <Stack.Screen name="Pacientes" component={Pacientes} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
