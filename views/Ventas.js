import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import CustomDatePicker from "../components/ui/CustomDatePicker";
import ventaService from "../services/ventaService";
import { ScrollView } from "react-native-gesture-handler";
import Venta from "../components/Venta";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Select from "../components/ui/Select";
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
  }
});

export default function Ventas({ navigation }) {
  const [ventas, setVentas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [desde, setDesde] = useState(null);
  const [hasta, setHasta] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    clienteService.list().then((clientes) => {
      setClientes(clientes);
    });
  }, [])

  useEffect(() => {
    setFiltered(ventas)
    if(desde) {
      setFiltered(filtered => filtered.filter(venta => venta.fecha >= desde))
    }
    if(hasta) {
      setFiltered(filtered => filtered.filter(venta => venta.fecha <= hasta))
    }
    if(cliente) {
      setFiltered(filtered => filtered.filter(venta => venta.cliente.id === cliente.id))
    }
  }, [desde, hasta, cliente, ventas])

  useFocusEffect(useCallback(() => {
    ventaService.list().then((ventas) => {
      setVentas(ventas);
    });
  }, []))

  const onSelectDesde = (date) => {
    const desde = date.toISOString().substr(0, 10);
    setDesde(desde);
  }

  const onSelectHasta = (date) => {
    const hasta = date.toISOString().substr(0, 10);
    setHasta(hasta);
  }

  const onSelectCliente = (cliente) => {
    setCliente(cliente);
  }
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Ventas" showMenu showActionButton actionButtonIcon={Plus} onPressActionButton={() => navigation.navigate("Agregar Venta")}>
          <CustomDatePicker text="Desde" onSelect={onSelectDesde}/>
          <CustomDatePicker text="Hasta" onSelect={onSelectHasta}/>
          <Select options={clientes.map((cliente, idx) => ({key: idx, text: cliente.nombre, value: cliente}))} defaultText="Todos" onSelect={onSelectCliente}/>
        </Header>
        <ScrollView style={styles.body}>
          {filtered.map((venta, idx) => (<Venta venta={venta} key={idx}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
