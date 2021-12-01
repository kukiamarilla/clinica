import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import ventaService from "../services/ventaService";
import { ScrollView } from "react-native-gesture-handler";
import Venta from "../components/Venta";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  page: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  }
});

export default function Ventas({ navigation }) {
  const [ventas, setVentas] = useState([]);

  useFocusEffect(() => {
    ventaService.list().then((ventas) => {
      setVentas(ventas);
    });
  })
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Ventas" showMenu showActionButton actionButtonIcon={Plus}>
        </Header>
        <ScrollView style={styles.body}>
          {ventas.map((venta, idx) => (<Venta venta={venta} key={idx}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
