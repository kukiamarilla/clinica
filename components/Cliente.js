import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Colors, Fonts } from "../styles/constants";
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
    flex: 1,
    flexDirection: "row",
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

export default function Cliente({cliente, onDelete}) {
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{flex:1, paddingHorizontal: 8}}>
          <Text>ID: {cliente.id}</Text>
        </View>
        <View style={{flex:4, paddingHorizontal: 8}}>
          <Text style={styles.text}>Nombre: {cliente.nombre}</Text>
          <Text style={[styles.marginTop, styles.text]}>Email: {cliente.email}</Text>
        </View>
        <View style={{flex:2, paddingHorizontal: 8}}>
          <Text style={[styles.marginTop, styles.text]}>RUC: {cliente.ruc}</Text>
        </View>
      </View>
      <View style={styles.acciones}>
        <TouchableOpacity style={[styles.accion]} onPress={onDelete}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  )
}
