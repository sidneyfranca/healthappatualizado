import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { ToDoList } from "./ToDoList/Todolist";
import { api } from "../../lib/api";

export function Favorito() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/favoritos")
      .then(data => setData(data.data))
  }, [])

  const DesfavoritarItem = async (id_favorito) => {
    await api.delete(`/item/${id_favorito}`)

    setData((prevData) => {
      return prevData.filter((texto) => texto.id_favorito != id_favorito);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ToDoList
            name={item.nome}
            image={item.imagem}
            props={item}
            funcao={() => DesfavoritarItem(item.id_favorito)}
          />
        )}
        keyExtractor={(item) => item.id_favorito}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
  },
  conteudo: {
    padding: 40,
  },
});
