import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import { Colors, Fonts } from "../styles/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Plus from "../components/icons/Plus";
import ventaService from "../services/ventaService";

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
  h2: {
    fontSize: 18,
    fontFamily: Fonts.BOLD,
    marginTop: 32
  },
  buttonCliente: {
    marginTop: 24,
  },
  fieldText: {
    marginTop: 48
  }
});

export default function AgregarVenta({ navigation, route }) {
  const [cliente, setCliente] = useState(null);
  const [detalle, setDetalle] = useState([]);
  
  useEffect(() => {
    if(route.params?.cliente) {
      setCliente(route.params.cliente);
    }
  }, [route.params?.cliente]);

  useEffect(() => {
    if(!route.params?.producto) {
      return
    }
    if(!detalle.find(item => item.producto.id === route.params.producto.id)) {
      setDetalle(detalle => [...detalle, {producto: route.params.producto, cantidad: 1}]);
    }else{
      setDetalle(detalle => detalle.map(item => item.producto.id === route.params.producto.id ? {...item, cantidad: item.cantidad + 1} : item));
    }
  }, [route.params?.producto]);

  const handleSubmit = () => {
    ventaService.create(cliente, detalle).then(() => {
      navigation.navigate('Ventas');
    });
  }

  return (
    <SafeAreaView style={styles.statusBar}>
      <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
      <View style={styles.page}>
        <Header title="Ventas" showMenu>
        </Header>
        <ScrollView style={styles.body}>
          <View style={styles.form}>
            <Text style={styles.title}>Registrar Venta</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.fieldText}>Cliente: {cliente ? cliente.nombre : "No Seleccionado"}</Text>
              <TouchableOpacity style={{marginTop: 52, marginLeft: 16}} onPress={() => navigation.navigate("Seleccionar Cliente")}>
                <Plus fill={Colors.PRIMARY_COLOR}/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.h2}>Productos</Text>
              <TouchableOpacity style={{marginTop: 38, marginLeft: 16, flexDirection: "row", alignItems: "center"}} onPress={() => navigation.navigate("Seleccionar Producto")}>
                <Text style={{color: Colors.PRIMARY_COLOR}}> Agregar </Text>
                <Plus fill={Colors.PRIMARY_COLOR}/>
              </TouchableOpacity>
            </View>
            {detalle.map((detalle, index) => (
              <View key={index} style={{flexDirection: "column", marginTop: 16, borderBottomColor: Colors.SECONDARY_COLOR, borderBottomWidth: 1, paddingVertical: 16}}>
                <Text>Nombre: {detalle.producto.nombre}</Text>
                <Text style={{marginTop: 8}}>Precio: {detalle.producto.precioVenta}</Text>
                <Text style={{marginTop: 8}}>Cantidad: {detalle.cantidad}</Text>
                <Text style={{marginTop: 8}}>Subtotal: {detalle.cantidad * detalle.producto.precioVenta}</Text>
              </View>
            ))}
            <Text style={[styles.h2]}>Total: {detalle.reduce((total, entrada) => total + entrada.producto.precioVenta * entrada.cantidad, 0)}</Text>
            <Button style={{marginTop: 24}} onPress={handleSubmit}>Guardar</Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}