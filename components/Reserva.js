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
export default function Reserva({ reserva }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>ID: {reserva.idReserva}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text>Fecha: {reserva.fecha}</Text>
        <Text style={[styles.marginTop, styles.text]}>
          Inicio: {reserva.horaInicio}
        </Text>
        <Text style={[styles.marginTop, styles.text]}>
          Fin: {reserva.horaInicio}
        </Text>
        <Text style={[styles.marginTop, styles.text]}>
          Asistio: {reserva.flgAsistio ? "SI" : "NO"}
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text>Obs: {reserva.observacion}</Text>
      </View>
    </View>
  );
}
