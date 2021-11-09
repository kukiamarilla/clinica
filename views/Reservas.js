import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import Hamburger from "../components/icons/Hamburger";
import RadioButton from "../components/RadioButton";
import reservaService from "../services/reservaService";
import { Colors, Fonts } from "../styles/constants";
import Select from "../components/Select";

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  header: {
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 32,
  },
  headerTop : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBottom : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 32,
    fontFamily: Fonts.BOLD,
  }
});

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  useEffect(() => {
    reservaService.list().then(setReservas);
  }, []);
  return (
    <View style={[styles.statusBar]}>
      <StatusBar style="light" backgroundColor={Colors.SECONDARY_COLOR}/>
      <SafeAreaView style={[styles.page]}>
        <View style={[styles.header]}>
          <View style={[styles.headerTop]}>
            <View>
              <Hamburger />
            </View>
            <Text style={[styles.pageTitle]}>Reservas</Text>
            <View>
              <RadioButton Icon={Plus} />
            </View>
          </View>
          <View style={[styles.headerBottom]}>
            <Select options={[]} defaultText="Cliente" />
            
          </View>
        </View>
        
      </SafeAreaView>
    </View>
  );
}