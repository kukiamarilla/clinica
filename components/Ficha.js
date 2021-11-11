import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.GRAY_4,
        borderBottomWidth: 1,
        display: "flex",
        paddingVertical: 24,
        paddingHorizontal: 40,
        flexDirection: "row",
    },
    text: {
        fontFamily: Fonts.REGULAR,
    },
    marginTop: {
        marginTop: 16,
    },
    item: {},
});
export default function Ficha({ ficha }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[styles.text]}>ID: {ficha.idFichaClinica}</Text>
            </View>
            <View style={{ flex: 3 }}>
                <Text style={[styles.text]}>
                    Paciente: {ficha.idCliente.nombre + " " + ficha.idCliente.apellido}
                </Text>
                <Text style={[styles.marginTop, styles.text]}>
                    Doctor: {ficha.idEmpleado.nombre + " " + ficha.idEmpleado.apellido}
                </Text>
                <Text style={[styles.marginTop, styles.text]}>
                    Motivo de Consulta: {ficha.motivoConsulta}
                </Text>
                <Text style={[styles.marginTop, styles.text]}>
                    Diagnostico: {ficha.diagnostico}
                </Text>
                <Text style={[styles.marginTop, styles.text]}>
                    Observacion: {ficha.observacion}
                </Text>
                {/*<Text style={[styles.marginTop, styles.text]}>*/}
                {/*    Fin: {reserva.fecha + " " + reserva.horaInicio}*/}
                {/*</Text>*/}
            </View>
            {/*<View style={{ flex: 2 }}>*/}
            {/*    <Text>Asistio: {reserva.flgAsistio ? "SI" : "NO"}</Text>*/}
            {/*</View>*/}
        </View>
    );
}
