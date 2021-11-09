import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../views/Login";
import Home from "../views/Home";
import Paciente from "../views/Paciente";
import Reservas from "../views/Reservas";
import useAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, autenticate, logout] = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? 
          ( 
            <Stack.Screen name="Paciente" component={Paciente}/>
            // <Stack.Screen name="Reservas" component={Reservas}/>
          ) : (
            <Stack.Screen name="Login" component={Login}/> 
          )
        }
      </Stack.Navigator>
    </NavigationContainer>        
  )
}
