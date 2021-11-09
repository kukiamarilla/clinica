import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.SECONDARY_COLOR,
    flex: 1
  },
  brandContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"   
  },
  brand: {
    fontSize: 48,
    fontFamily: Fonts.BLACK,
    color: Colors.PRIMARY_COLOR
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  completer: {
    flex: 1
  },
  button: {
    marginHorizontal: 12,
    marginTop: 56
  }
})

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);

  const [isLoggedIn, autenticate, logout] = useAuth();


  const onLogin = () => {
    autenticate(username, password).then(result => {
      if(!result) {
        setUsernameValid(false);
        setPasswordValid(false);
        Alert.alert("Inicio de Sesión", "Credenciales incorrectas.")
      }
    })
  }
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>ClinAPP</Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Input  
            placeholder="Usuario..."
            onChangeText={setUsername}
            isValid={usernameValid}
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Input 
            placeholder="Contraseña..." 
            secureTextEntry={true}
            onChangeText={setPassword}
            isValid={passwordValid}
          />
          <Button style={styles.button} onPress={onLogin}>Iniciar Sesión</Button>
        </View>
      </View>
      <View style={styles.completer}></View>
    </SafeAreaView>
  )
}