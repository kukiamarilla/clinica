import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Clientes from "../views/Clientes";
import Productos from "../views/Productos";
import Ventas from "../views/Ventas";
import AgregarCliente from "../views/AgregarCliente";
import AgregarProducto from "../views/AgregarProducto";
import DetalleVenta from "../views/DetalleVenta";
import AgregarVenta from "../views/AgregarVenta";
import SeleccionarCliente from "../views/SeleccionarCliente";
import SeleccionarProducto from "../views/SeleccionarProducto";
import ModificarCliente from "../views/ModificarCliente";
import ModificarProducto from "../views/ModificarProducto";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Ventas">
          <Stack.Screen name="Ventas" component={Ventas} />
          <Stack.Screen name="Productos" component={Productos} />
          <Stack.Screen name="Clientes" component={Clientes} />
          <Stack.Screen name="Detalle Venta" component={DetalleVenta} />
          <Stack.Screen name="Modificar Cliente" component={ModificarCliente} />
          <Stack.Screen name="Modificar Producto" component={ModificarProducto} />
          <Stack.Screen name="Agregar Cliente" component={AgregarCliente} />
          <Stack.Screen name="Agregar Producto" component={AgregarProducto} />
          <Stack.Screen name="Agregar Venta" component={AgregarVenta} />
          <Stack.Screen name="Seleccionar Cliente" component={SeleccionarCliente} />
          <Stack.Screen name="Seleccionar Producto" component={SeleccionarProducto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
