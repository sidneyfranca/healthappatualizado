import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'

const Pharmacy = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../../assets/medi.png"),
      text: "Medicamentos",
    },
    {
      key: "2",
      image: require("../../../assets/estrela.png"),
      text: "Favoritos",
    },
  ]);

  const Clicavel = (itemKey) => {
    if (itemKey === "1") {
      navigation.navigate("Medicamento");
    } else if (itemKey === "2") {
      navigation.navigate("Favorito");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                Clicavel(item.key)
              }}>
              <Image style={styles.userImage} source={item.image} />
              <View style={styles.cardFooter}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => Clicavel(item.key)}>
                    <Text style={styles.followButtonText}>{item.text}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#DCDCDC',
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default Pharmacy;