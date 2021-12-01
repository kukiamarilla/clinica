import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import CustomDatePicker from "../components/ui/CustomDatePicker";
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
  const [filtered, setFiltered] = useState([]);

  useFocusEffect(useCallback(() => {
    ventaService.list().then((ventas) => {
      setVentas(ventas);
      setFiltered(ventas);
    });
  }, []))

  const onSelectDesde = (date) => {
    const desde = date.toISOString().substr(0, 10);
    setFiltered(ventas.filter(venta => {
      const fecha = venta.fecha.substr(0, 10);
      return fecha >= desde;
    }))
  }

  const onSelectHasta = (date) => {
    const hasta = date.toISOString().substr(0, 10);
    setFiltered(ventas.filter(venta => {
      const fecha = venta.fecha.substr(0, 10);
      return fecha <= hasta;
    }))
  }

  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Ventas" showMenu showActionButton actionButtonIcon={Plus} onPressActionButton={() => navigation.navigate("Agregar Venta")}>
          <CustomDatePicker text="Desde" onSelect={onSelectDesde}/>
          <CustomDatePicker text="Hasta" onSelect={onSelectHasta}/>
        </Header>
        <ScrollView style={styles.body}>
          {filtered.map((venta, idx) => (<Venta venta={venta} key={idx}/>))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
