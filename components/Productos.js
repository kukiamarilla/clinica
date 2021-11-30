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

export default function Producto({producto}) {
  return(
    <View style={styles.container}>
      <View style={{flex:2, paddingHorizontal: 8}}>
        <Text style={styles.text}>ID: {producto.id}</Text>
        <Text style={[styles.marginTop, styles.text]}>Código: {producto.codigo}</Text>
      </View>
      <View style={{flex:4, paddingHorizontal: 8}}>
        <Text style={styles.text}>Nombre: {producto.nombre}</Text>
      </View>
      <View style={{flex:2, paddingHorizontal: 8}}>
        <Text style={[styles.marginTop, styles.text]}>Precio: {producto.precioVenta}</Text>
        <Text style={[styles.marginTop, styles.text]}>Existencia: {producto.existencia}</Text>
      </View>
    </View>
  )
}
