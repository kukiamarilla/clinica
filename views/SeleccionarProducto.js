import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Header from "../components/ui/Header";
import productoService from "../services/productoService";
import Producto from "../components/Productos";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
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

export default function SeleccionarProductos({ navigation }) {
  const [productos, setProductos] = useState([]);

  useFocusEffect(() => {
    productoService.list().then((productos) => {
      setProductos(productos);
    });
  })
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Seleccione un Producto...">
        </Header>
        <ScrollView style={styles.body}>
          { productos.map((producto) => (
              <TouchableOpacity key={producto.id} onPress={() => navigation.navigate("Agregar Venta", { producto })}>
                <Producto producto={producto} key={producto.id}/>
              </TouchableOpacity>
            )
          ) }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
