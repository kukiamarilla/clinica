import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default function Login() {
  const [isLoggedIn, autenticate, logout] = useAuth();

  const cerrarSesion = () => {
    logout();
  }
  
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Button onPress={cerrarSesion}>Cerrar Sesion</Button>
      </View>
    </SafeAreaView>
  )
}