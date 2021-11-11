import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import { Colors } from "../styles/constants";
import Select from "../components/Select";
import pacienteService from "../services/pacienteService";
import CustomDatePicker from "../components/CustomDatePicker";
import Header from "../components/Header";
import fichaService from "../services/fichaService";
import Ficha from "../components/Ficha";
import categoriaService from "../services/categoriaService";
import tipoProductoService from "../services/tipoProductoService";

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
        paddingHorizontal: 8,
    },
});

export default function Fichas({ navigation }) {
    const [fichas, setFichas] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [empleados, setEmpleados] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);

    const [cliente, setCliente] = useState(null);
    const [empleado, setEmpleado] = useState(null);
    const [inicio, setInicio] = useState(null);
    const [fin, setFin] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [subcategoria, setSubcategoria] = useState(null);


    useEffect(() => {
        fichaService.list({cliente, empleado, desde: inicio, hasta: fin, subcategoria}).then(setFichas);
    }, [cliente, empleado, inicio, fin, categoria, subcategoria]);
    useEffect(() => {
        pacienteService.clientes({}).then(setClientes)
    }, []);
    useEffect(() => {
        pacienteService.users().then(empleados => setEmpleados(empleados.lista))
    }, []);
    useEffect(() => {
        categoriaService.list().then(setCategorias);
    }, []);
    useEffect(() => {
        if (categoria) {
            tipoProductoService.list({ categoria: categoria }).then(setSubcategorias);
        }
    }, [categoria]);
    return (
        <SafeAreaView style={styles.statusBar}>
            <StatusBar backgroundColor={Colors.SECONDARY_COLOR} style="light" />
            <View style={styles.page}>
                <Header
                    title="Fichas"
                    showMenu
                    showActionButton
                    actionButtonIcon={Plus}
                    onPress={navigation.navigate("AgregarFichas")}
                >
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, paddingRight: 8 }}>
                            <Select options={clientes.map((cliente, idx) => ({key: idx,text: `${cliente.nombre} ${cliente.apellido}`, value: cliente}))} defaultText="Cliente" onSelect={setCliente}/>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 8 }}>
                            <Select options={empleados.map((empleado, idx) => ({key: idx,text: `${empleado.nombre} ${empleado.apellido}`,value: empleado }))} defaultText="Empleado" onSelect={setEmpleado}/>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, paddingRight: 8 }}>
                            <CustomDatePicker text="Inicio" onSelect={setInicio}/>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 8 }}>
                            <CustomDatePicker text="Fin" onSelect={setFin}/>
                        </View>
                    </View>
                    <Select options={categorias.map((categoria, idx) => ({key: idx, text: `${categoria.descripcion}`, value: categoria}))} defaultText="Categoria" onSelect={setCategoria}/>
                    { categoria && <Select options={subcategorias.map((subcategoria, idx) => ({key: idx,text: `${subcategoria.descripcion}`, value: subcategoria}))} defaultText="Subcategoria" onSelect={setSubcategoria}/> }
                </Header>
                <ScrollView style={styles.body}>
                    {fichas.map((item) => {
                        return <Ficha key={item.id} ficha={item} />;
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
