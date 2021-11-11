import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import Hamburger from "../components/icons/Hamburger";
import RadioButton from "../components/RadioButton";
import reservaService from "../services/reservaService";
import { Colors, Fonts } from "../styles/constants";
import Select from "../components/Select";
import pacienteService from "../services/pacienteService";
import CustomDatePicker from "../components/CustomDatePicker";
import Header from "../components/Header";
import Reserva from "../components/Reserva";
import fichaService from "../services/fichaService";
import Ficha from "../components/Ficha";

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

    useEffect(() => {
        fichaService.list({}).then(setFichas);
    }, []);
    useEffect(() => {
        pacienteService.clientes().then(setClientes);
    }, []);
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
                    <Select
                        options={clientes.map((cliente) => ({
                            key: cliente.id,
                            text: `${cliente.nombre} ${cliente.apellido}`,
                            value: cliente,
                        }))}
                        defaultText="Paciente"
                    />
                    <Select
                        options={clientes.map((cliente) => ({
                            key: cliente.id,
                            text: `${cliente.nombre} ${cliente.apellido}`,
                            value: cliente,
                        }))}
                        defaultText="Fisioterapeuta"
                    />
                    <CustomDatePicker text="Inicio" />
                    <CustomDatePicker text="Fin" />
                </Header>
                <ScrollView style={styles.body}>
                    {fichas.map((item) => {
                        console.log(item);
                        return <Ficha key={item.id} ficha={item} />;
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
