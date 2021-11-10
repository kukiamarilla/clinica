import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
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

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.SECONDARY_COLOR,
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
    <View style={[styles.statusBar]}>
      <StatusBar style="light" backgroundColor={Colors.SECONDARY_COLOR} />
      <SafeAreaView style={[styles.page]}>
        <Header
          title="Reservas"
          actionButtonIcon={Plus}
          onPressActionButton={() =>
            navigation.navigate("AltaReservas")
          }
          showActionButton
          showMenu
        >
          <Select 
            options={
              clientes.map((cliente, idx) => ({
                key: idx,
                text: cliente.nombre + " " + cliente.apellido,
                value: cliente
              }))
            }
            defaultText="Cliente" 
          />
          <Select 
            options={
              clientes.map((cliente, idx) => ({
                key: idx,
                text: cliente.nombre + " " + cliente.apellido,
                value: cliente
              }))
            }
            defaultText="Fisioterapeuta" 
          />
          <CustomDatePicker text="Inicio"/>
          <CustomDatePicker text="Fin"/>
        </Header>
      </SafeAreaView>
    </View>
  );
}
