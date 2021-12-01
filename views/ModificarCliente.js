import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import { Colors, Fonts } from "../styles/constants";
import clienteService from "../services/clienteService";

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  page: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  form: {
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  textInput: {
    marginTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: Colors.SECONDARY_COLOR,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.BOLD
  },
  button: {
    marginTop: 64,
  }
});

export default function ModificarCliente({ navigation, route }) {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [ruc, setRuc] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if(route.params?.cliente) {
      setId(route.params.cliente.id);
      setNombre(route.params.cliente.nombre);
      setRuc(route.params.cliente.ruc);
      setEmail(route.params.cliente.email);
    }
  }, [route.params?.cliente])

  const handleSubmit = () => {
    clienteService.update({id, nombre, ruc, email}).then(() => {
      navigation.navigate("Clientes");
    });
  };
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Clientes" showMenu>
        </Header>
        <ScrollView style={styles.body}>
          <View style={styles.form}>
            <Text style={styles.title}>Modificar Cliente</Text>
            <TextInput placeholder="Nombre" style={styles.textInput} value={nombre} onChangeText={setNombre}/>
            <TextInput placeholder="RUC" style={styles.textInput} value={ruc} onChangeText={setRuc}/>
            <TextInput placeholder="Email" style={styles.textInput} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <Button style={styles.button} onPress={handleSubmit}>Guardar</Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}