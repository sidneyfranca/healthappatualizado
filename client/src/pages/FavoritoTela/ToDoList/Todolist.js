import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function ToDoList({ props, funcao }) {

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imagem}>
          <Image
            style={{
              height: 70,
              width: 60,
              overflow: "hidden",
              borderRadius: 25,
            }}
            source={{ uri: props.imagem }}
          ></Image>
        </View>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.name}>{props.nome}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => funcao(props.id_favorito)}>
          <View style={styles.estrela}>
            <Ionicons name="star" size={30} color="yellow"></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "blue",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff3e89",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 100,
    width: 100,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#ff914d",
  },
  role: {
    fontSize: 13,
    color: "#ff914d",
  },
});
