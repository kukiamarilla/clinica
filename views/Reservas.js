import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import Hamburger from "../components/icons/Hamburger";
import RadioButton from "../components/RadioButton";
import reservaService from "../services/reservaService";
import { Colors, Fonts } from "../styles/constants";
import Select from "../components/Select";
import pacienteService from "../services/pacienteService";
import CustomDatePicker from "../components/CustomDatePicker";
import Header from "../components/Header";
import Reserva from "../components/Reserva";

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
    paddingHorizontal: 8,
  },
});

export default function Reservas({ navigation }) {
  const [reservas, setReservas] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    reservaService.list({}).then(setReservas);
  }, []);
  useEffect(() => {
    pacienteService.clientes().then(setClientes);
  }, []);
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header
          title="Reservas"
          showMenu
          showActionButton
          actionButtonIcon={Plus}
        >
          <Select
            options={clientes.map((cliente) => ({
              key: cliente.id,
              text: `${cliente.nombre} ${cliente.apellido}`,
              value: cliente,
            }))}
            defaultText="Cliente"
          />
          <Select
            options={clientes.map((cliente) => ({
              key: cliente.id,
              text: `${cliente.nombre} ${cliente.apellido}`,
              value: cliente,
            }))}
            defaultText="Empleado"
          />
          <CustomDatePicker text="Inicio" />
          <CustomDatePicker text="Fin" />
        </Header>
        <ScrollView style={styles.body}>
          {reservas.map((item) => {
            console.log(item);
            return <Reserva key={item.id} reserva={item} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
