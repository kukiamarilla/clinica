import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import productoService from "../services/productoService";
import Producto from "../components/Productos";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

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

export default function Productos({ navigation }) {
  const [productos, setProductos] = useState([]);

  useFocusEffect(useCallback(() => {
    productoService.list().then((productos) => {
      setProductos(productos);
    });
  }, []));
  const deleteProducto = (producto) => {
    productoService.delete(producto).then(producto => {
      setProductos(productos);
    });
  }
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Productos" showMenu showActionButton actionButtonIcon={Plus} onPressActionButton={() => navigation.navigate("Agregar Producto")}>
        </Header>
        <ScrollView style={styles.body}>
          {productos.map((producto) => (<Producto producto={producto} key={producto.id} onDelete={() => deleteProducto(producto)} />))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
