import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors, Fonts } from "../styles/constants";


const styles = StyleSheet.create({
    textInput: {
      backgroundColor: "transparent",
      borderBottomColor: Colors.WHITE,
      borderBottomWidth: 1,
      color: Colors.WHITE, 
      fontFamily: Fonts.REGULAR,
      flex: 1,
      marginHorizontal: 8,
      paddingVertical: 16,
    }
  }
)

export default function BuscadorTexto({onChange, placeholder}) {

  return(
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Colors.WHITE}
        onBlur={onChange}
        placeholder={placeholder}
      />
  )
}
