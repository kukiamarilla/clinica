import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../styles/constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})
export default function RadioButton({ Icon, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.button, style]} >
      <Icon />
    </TouchableOpacity>
  );
}