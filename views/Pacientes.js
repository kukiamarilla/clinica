import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pacienteService from "../services/pacienteService";
import { Colors, Fonts } from "../styles/constants";

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: Colors.SECONDARY_COLOR,
    },
    header: {
        backgroundColor: Colors.SECONDARY_COLOR,
        padding: 32,
    },
    headerTop : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerBottom : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pageTitle: {
        color: Colors.PRIMARY_COLOR,
        fontSize: 32,
        fontFamily: Fonts.BOLD,
    }
});

export default function Pacientes() {
    const [pacientes, setPaciente] = useState([]);
    useEffect(() => {
        pacienteService.list().then(setPaciente);
    }, []);
    return (
        <View style={[styles.statusBar]}>
            <StatusBar style="light" backgroundColor={Colors.SECONDARY_COLOR}/>
            <SafeAreaView>
                <View style={[styles.header]}>
                    <View style={[styles.headerTop]}>
                        <View>
                            <Text>asd</Text>
                        </View>
                        <Text style={[styles.pageTitle]}>Pacientes</Text>
                        <View>
                            <Text>asd</Text>
                        </View>
                    </View>
                    <View style={[styles.headerBottom]}>
                        <TextInput placeholder="Buscar" style={{width: "100%"}}/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
