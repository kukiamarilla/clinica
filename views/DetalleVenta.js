import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts } from "../styles/constants";
import Header from "../components/ui/Header";
import { ScrollView } from "react-native-gesture-handler";
import Detalle from "../components/Detalle";

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

const formatDate = (date) => {
  const d = new Date(date);
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function DetalleVenta({ route }) {
  const { venta } = route.params

  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Detalle de Venta" showMenu >
        </Header>
        <ScrollView style={styles.body}>
          <Text style={{marginTop: 16, marginLeft: 32}}>Id: {venta.id}</Text>
          <Text style={{marginTop: 16, marginLeft: 32}}>Nro Factura: {venta.prefijoFactura}{venta.nroFactura}</Text>
          <Text style={{marginTop: 16, marginLeft: 32}}>Cliente: {venta.cliente.nombre}</Text>
          <Text style={{marginTop: 16, marginLeft: 32}}>Fecha: {formatDate(venta.fecha)}</Text>
          <Text style={{marginTop: 16, marginLeft: 32}}>Total: {venta.total}</Text>
          <Text style={{marginTop: 32, marginLeft: 32, fontFamily: Fonts.BOLD, fontSize: 18}}>Detalles</Text>
          {venta.detalle.map((detalle, idx) => (<Detalle detalle={detalle} key={idx}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
