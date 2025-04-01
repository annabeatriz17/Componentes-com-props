import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gelatto Mágico</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
});