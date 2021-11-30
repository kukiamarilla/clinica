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

export default function Cliente({cliente}) {
  return(
    <View style={styles.container}>
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
  )
}
