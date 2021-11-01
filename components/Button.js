import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 32,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    fontSize: 16
  }
})

export default function Button({children, onPress, style}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}