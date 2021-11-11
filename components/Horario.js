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
        flexDirection: "row",
        borderColor: Colors.BLACK,
    },
    text: {
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK,
    },
    marginTop: {
        marginTop: 16,
    },
});
export default function Horario({ horario }) {
    console.log(horario);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
                <Text style={styles.text}>Inicio: {horario?.horarioInicio}</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
                <Text>Fin: {horario.horarioFin}</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
                <Text>
                    Cliente:{" "}
                    {horario.idCliente?.nombre + " " + horario.idCliente?.apellido}
                </Text>
            </View>
        </View>
    );
}
