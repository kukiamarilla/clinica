import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Colors, Fonts } from "../styles/constants";
import Caret from "./icons/Caret";

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
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
    maxHeight: 300,
    minWidth: 200,
    minHeight: 100,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  scrollView: {
    padding: 10,
    height: 280,
    overflow: "hidden",
    zIndex: 1,
  },
  dropdownText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    paddingVertical: 10,
    color: Colors.GRAY_4,
  },
  selected: {
    color: Colors.BLACK,
    fontFamily: Fonts.BOLD,
  }
})
export default function Select({ options, onSelect, defaultText, style }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <View style={[{position:"relative"}, showOptions ? {zIndex: 1} : null]}>
      <TouchableWithoutFeedback onPress={() => setShowOptions(showOptions => !showOptions)} activeOpacity={0.8} style={[styles.select, style]} >
        <Text style={styles.text}>{selected ? selected.text : defaultText}</Text>
        <Caret />
      </TouchableWithoutFeedback>
      {showOptions && 
        <View style={styles.options}>
          <ScrollView style={[styles.scrollView]} >
            <TouchableOpacity onPress={() => {
              setSelected(null);
              setShowOptions(false);
            }}
            >
              <Text style={[styles.dropdownText, !selected ? styles.selected : null]}>Todos</Text>
            </TouchableOpacity>
            {options.map(option => (
              <TouchableOpacity onPress={() => {
                setSelected(option);
                setShowOptions(false);
                if(onSelect)
                  onSelect(option.value);
              }}
              >
                <Text style={[styles.dropdownText, selected && selected.key == option.key ? styles.selected : null]}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      }
    </View>
  );
}