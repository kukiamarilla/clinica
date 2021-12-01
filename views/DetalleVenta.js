import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import { ScrollView } from "react-native-gesture-handler";
import Detalle from "../components/Detalle";

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

export default function DetalleVenta({ route }) {
  const { venta } = route.params

  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Detalle de Venta" showMenu >
        </Header>
        <ScrollView style={styles.body}>
          {venta.detalle.map((detalle, idx) => (<Detalle detalle={detalle} key={idx}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
