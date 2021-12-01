import React, { Children, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Colors, Fonts } from "../../styles/constants";
import Hamburger from "../icons/Hamburger";
import Menu from "./Menu";
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
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    backgroundColor: Colors.SECONDARY_COLOR,
  }
});

export default function Header({ title, showMenu, showActionButton, actionButtonIcon, onPressActionButton, children }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuAnimation = useRef(new Animated.Value(1)).current;

  const menuFadeIn = () => {
    setMenuOpen(true);
    Animated.timing(menuAnimation, {  
      toValue: 1,
      duration: 200,
      useNativeDriver: false
    }).start();
  };
  const menuFadeOut = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start(() => setMenuOpen(false));
  };

  return (
    <>
      { menuOpen && 
        <Animated.View style={{...styles.menu, opacity: menuAnimation }}>
          <Menu onClose={menuFadeOut}/>
        </Animated.View>
      }
      <View style={[styles.header]}>
        <View style={[styles.headerTop]}>
            <View>
              { showMenu && 
                <TouchableOpacity activeOpacity={0.8} onPress={menuFadeIn}>
                  <Hamburger /> 
                </TouchableOpacity>
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
    </>
  );
}