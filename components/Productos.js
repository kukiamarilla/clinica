import { NavigationContext } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Fonts } from "../styles/constants";
import Pencil from "./icons/Pencil";
import Trash from "./icons/Trash";

const styles = StyleSheet.create({
  container:{
    width: "100%",
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY_4,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: "column"
  },
  info: {
    flexDirection: "row",
    flex: 1
  },
  marginTop:{
    marginTop: 16
  },
  text:{
    fontFamily: Fonts.REGULAR
  },
  acciones: {
    flexDirection: "row",
    justifyContent: "center",
  },
  accion: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  }

})

export default function Producto({producto, onDelete}) {
  const navigation = useContext(NavigationContext)
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{flex:2, paddingHorizontal: 8}}>
          <Text style={styles.text}>ID: {producto.id}</Text>
          <Text style={[styles.marginTop, styles.text]}>Código: {producto.codigo}</Text>
        </View>
        <View style={{flex:4, paddingHorizontal: 8}}>
          <Text style={styles.text}>Nombre: {producto.nombre}</Text>
          <Text style={[styles.text]}>Precio: {producto.precioVenta}</Text>
          <Text style={[styles.marginTop, styles.text]}>Existencia: {producto.existencia}</Text>
        </View>
      </View>
      <View style={[styles.acciones]}>
        <TouchableOpacity style={[styles.accion]} onPress={onDelete}>
          <Trash />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.accion]} onPress={() => navigation.navigate("Modificar Producto", { producto })}>
          <Pencil />
        </TouchableOpacity>
      </View>
    </View>
  )
}
