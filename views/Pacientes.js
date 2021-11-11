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
import Paciente from "../components/Paciente";
import { ScrollView } from "react-native-gesture-handler";
import BuscadorTexto from "../components/BuscadorTexto";

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  page: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: Colors.WHITE,
  }
});

export default function Pacientes({ navigation }) {
  
  const [pacientes, setPacientes] = useState([])
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")


  useEffect(() => {
    const filtros = {
      nombre,
      apellido
    }
    pacienteService.clientes(filtros).then(setPacientes);
  }, [nombre, apellido]);
  

  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Pacientes" showMenu showActionButton actionButtonIcon={Plus}>
          <View style={{flexDirection: "row", width: "100%", marginTop:20}}>
            <BuscadorTexto placeholder="Nombre" onChange={setNombre}></BuscadorTexto>
            <BuscadorTexto placeholder="Apellido" onChange={setApellido}></BuscadorTexto>
          </View>
        </Header>
        <ScrollView style={styles.body}>
          {
            pacientes.map((paciente) => 
              <Paciente key={paciente.id} paciente={paciente}/>)
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
