import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Header from "./componentes/Header";
import Button from "./componentes/Button";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Bem vindo a Sorveteria</Text>
      <Text style={styles.title0}>O que você deseja pedir?</Text>
      <TextInput style={styles.input} placeholder="Coloque aqui o seu pedido" />
      <Button />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3bbdd",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title0: {
    margin: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
  },
});