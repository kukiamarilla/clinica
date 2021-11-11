import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Plus from "../components/icons/Plus";
import Hamburger from "../components/icons/Hamburger";
import RadioButton from "../components/RadioButton";
import reservaService from "../services/reservaService";
import { Colors, Fonts } from "../styles/constants";
import Select from "../components/Select";
import Header from "../components/Header";
import Input from "../components/Input";
import CustomDatePicker from "../components/CustomDatePicker";
import Button from "../components/Button";
import Horario from "../components/Horario";

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
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 12,
        marginTop: 56,
    },
});

export default function ReservasAlta({ navigation }) {
    const [reservasAlta, setReservasAlta] = useState({});

    const horarioDis = [
        {
            horarioInicio: "09:00",
            horarioFin: "10:00",
            idCliente: {
                nombre: "fulano",
                apellido: "sultano",
            },
        },
        {
            horarioInicio: "09:00",
            horarioFin: "10:00",
            idCliente: {},
        },
    ];
    return (
        <View style={[styles.statusBar]}>
            <StatusBar style="light" backgroundColor={Colors.SECONDARY_COLOR} />
            <SafeAreaView style={[styles.page]}>
                <Header title="Agregar Ficha" showMenu />
                <View style={styles.body}>
                    <CustomDatePicker text="Fecha" dark />
                    <Input
                        placeholder="CI Empleado"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <Input
                        placeholder="CI Cliente"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Motivo de la consulta"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Diagnostico"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Observacion"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <ScrollView style={{ height: 100, width: "100%" }}>
                        {horarioDis.map((item) => {
                            return <Horario horario={item} />;
                        })}
                    </ScrollView>

                    <Button style={styles.button}>Guardar</Button>
                </View>
            </SafeAreaView>
        </View>
    );
}
