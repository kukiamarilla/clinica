import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Colors, Fonts } from "../styles/constants";
import Caret from "./icons/Caret";

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    position: "relative",
  },
  text: {
    color: "white",
    paddingRight: 20,
    fontFamily: Fonts.REGULAR
  },
  options: {
    position: "absolute",
    top: 72,
    left: 0,
    maxHeight: 200,
    minWidth: 200,
    minHeight: 100,
    backgroundColor: Colors.WHITE
  }
})
export default function Select({ options, onSelect, defaultText, style }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <TouchableWithoutFeedback onPress={() => setShowOptions(showOptions => !showOptions)} activeOpacity={0.8} style={[styles.select, style]} >
      <Text style={styles.text}>{selected ? selected.text : defaultText}</Text>
      <Caret />
      {showOptions && 
        <View style={styles.options}>
          {options.map(option => (
            <TouchableOpacity onPress={() => {
              setSelected(option.value);
              setShowOptions(false);
              onSelect(option.value);
            }
            }>
              <Text>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      }
    </TouchableWithoutFeedback>
  );
}