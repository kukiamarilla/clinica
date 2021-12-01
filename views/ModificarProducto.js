import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import { Colors, Fonts } from "../styles/constants";
import productoService from "../services/productoService";

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
  },
  form: {
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  textInput: {
    marginTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: Colors.SECONDARY_COLOR,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.BOLD
  },
  button: {
    marginTop: 64,
  }
});

export default function ModificarProducto({ navigation, route }) {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [precioVenta, setPrecioVenta] = useState(0);
  const [existencia, setExistencia] = useState(0);

  useEffect(() => {
    if(route.params?.producto) {
      const { producto } = route.params;
      setId(producto.id);
      setNombre(producto.nombre);
      setCodigo(producto.codigo);
      setPrecioVenta(producto.precioVenta.toString());
      setExistencia(producto.existencia.toString());
    }
  }, [route.params?.producto])
  const handleSubmit = () => {
    productoService.update({id, nombre, codigo, precioVenta: parseInt(precioVenta), existencia: parseInt(existencia)}).then(() => {
      navigation.navigate("Productos");
    });
  };
  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Productos" showMenu>
        </Header>
        <ScrollView style={styles.body}>
          <View style={styles.form}>
            <Text style={styles.title}>Agregar Productos</Text>
            <TextInput placeholder="Nombre" style={styles.textInput} value={nombre} onChangeText={setNombre}/>
            <TextInput placeholder="Código" style={styles.textInput} value={codigo} onChangeText={setCodigo}/>
            <TextInput placeholder="Precio" style={styles.textInput} value={precioVenta} onChangeText={setPrecioVenta}/>
            <TextInput placeholder="Existencia" style={styles.textInput} value={existencia} onChangeText={setExistencia}/>
            <Button style={styles.button} onPress={handleSubmit}>Guardar</Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}