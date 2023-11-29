import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { api } from "../../../lib/api";

export function EmployeeListItem(props) {
  const [favoritar, setFavoritar] = useState(false);

  useEffect(() => {
    setFavoritar(props.favorited);
  }, [props]);

  const handleFavorite = () => {
    if (!favoritar) {
      submeterInformacao({ nome: props.name, imagem: props.image });
      setFavoritar(!favoritar);
    }
  };

  const submeterInformacao = async (item) => {
    try {
      await api.post("/favorito", { nome: item.nome, imagem: item.imagem });
      console.log("Item favoritado com sucesso:", item);
    } catch (error) {
      console.error("Erro ao favoritar item:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image
          style={{
            height: 70,
            width: 60,
            overflow: "hidden",
            borderRadius: 25,
          }}
          source={{ uri: props.image }}
        ></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.role}>{props.role}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleFavorite}
      >
        {favoritar ? (
          <Ionicons name="star" size={30} color="blue"></Ionicons>
        ) : (
          <Ionicons name="star-outline" size={30} color="yellow"></Ionicons>
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
