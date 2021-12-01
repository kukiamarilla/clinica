import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { Colors, Fonts } from "../../styles/constants";

const styles = StyleSheet.create({
  menu: {
    backgroundColor: Colors.SECONDARY_COLOR,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1
  },
  background: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: "100%",
    left: 0,
  },
  list: {
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  button: {
    paddingVertical: 16,
    width: "100%",
  },
  text: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    color: Colors.PRIMARY_COLOR,
  },
  backdrop: {
    width: "100%",
    height: Dimensions.get("window").height,
    position: "absolute",
    top: "100%",
    left: 0,
  }
});
export default function Menu({onClose}) {
  const navigation = useContext(NavigationContext);
  const navigateTo = (route) => {
    navigation.navigate(route);
    onClose();
  };
  return (
    <View style={styles.menu}>
      <View style={styles.list}>
        <TouchableOpacity style={styles.button} onPress={ () => navigateTo("Ventas")}>
          <Text style={styles.text}>Ventas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={ () => navigateTo("Clientes")}>
          <Text style={styles.text}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={ () => navigateTo("Productos")}>
          <Text style={styles.text}>Productos</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient colors={[Colors.SECONDARY_COLOR, "rgba(0, 0, 0, 0)"]} style={styles.background} />
      <TouchableWithoutFeedback onPress={() => onClose()}>
        <View style={styles.backdrop}/>
      </TouchableWithoutFeedback>
    </View>
  );
}