import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>ENVIAR PEDIDO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: "120%",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
});