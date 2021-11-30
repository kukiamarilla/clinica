import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import clienteService from "../services/clienteService";
import Cliente from "../components/Cliente";
import { ScrollView } from "react-native-gesture-handler";
import productoService from "../services/productoService";

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
  }
});

export default function Clientes({ navigation }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    clienteService.list().then((clientes) => {
      setClientes(clientes);
    });
  })
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Clientes" showMenu showActionButton actionButtonIcon={Plus}>
        </Header>
        <ScrollView style={styles.body}>
          {clientes.map((cliente) => (<Cliente cliente={cliente} key={producto.id}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
