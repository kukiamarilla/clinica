import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../../styles/constants";
import Hamburger from "../icons/Hamburger";
import RadioButton from "./RadioButton";

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 32,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBottom: {
  },
  pageTitle: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 24,
    fontFamily: Fonts.BOLD,
  },
});

export default function Header({ title, showMenu, showActionButton, actionButtonIcon, onPressActionButton, children }) {
  return (
    <View style={[styles.header]}>
      <View style={[styles.headerTop]}>
          <View>
            { showMenu && 
              <Hamburger /> 
            }
          </View>
        <Text style={[styles.pageTitle]}>{title}</Text>
          <View>
            {showActionButton && 
              <RadioButton
                Icon={actionButtonIcon}
                onPress={onPressActionButton}
              />
            }
          </View>
      </View>
      <View style={[styles.headerBottom]}>
        {children}
      </View>
    </View>
  );
}