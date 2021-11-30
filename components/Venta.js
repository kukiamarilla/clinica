import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
  container:{
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY_4,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: "row"
  },
  marginTop:{
    marginTop: 16
  },
  text:{
    fontFamily: Fonts.REGULAR
  }

})

const formatDate = (date) => {
  const d = new Date(date);
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function Venta({venta}) {
  return(
    <View style={styles.container}>
      <View style={{flex:1, paddingHorizontal: 8}}>
        <Text>ID: {venta.id}</Text>
      </View>
      <View style={{flex:4, paddingHorizontal: 8}}>
        <Text style={styles.text}>Factura: {venta.prefijoFactura + venta.nroFactura}</Text>
        <Text style={[styles.marginTop, styles.text]}>Fecha: {formatDate(venta.fecha)}</Text>
        <Text style={[styles.marginTop, styles.text]}>Cliente: {venta.cliente.nombre}</Text>
      </View>
      <View style={{flex:2, paddingHorizontal: 8}}>
        <Text style={[styles.marginTop, styles.text]}>Total: {venta.total}</Text>
      </View>
    </View>
  )
}
