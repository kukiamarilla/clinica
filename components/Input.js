import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    width: 300,
    backgroundColor: Colors.WHITE_OPACITY,
    borderRadius: 30,
    color: Colors.WHITE,
    margin: 12,
    fontFamily: Fonts.BOLD,
    fontSize: 16,
  },
  notValid: {
    borderColor: Colors.DANGER,
    borderWidth: 1,
    color: Colors.DANGER,
  },
});

export default function Input(props) {
  return (
    <TextInput
      style={[styles.input, !props.isValid ? styles.notValid : null]}
      placeholderTextColor={Colors.SECONDARY_COLOR}
      {...props}
      maxLength={props.max != 0 ? props.max : 1}
      editable
    ></TextInput>
  );
}
