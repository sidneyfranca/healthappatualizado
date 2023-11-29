import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'

export default Users = () => {
  const data = [
    {
      id: 1,
      name: 'Dr. Marcos',
      position: 'Clínica Médica',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 1,
      name: 'Dr. João',
      position: 'Hematologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 2,
      name: 'Dr. Carlos',
      position: 'Infectologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: 'Dr. Jorge',
      position: 'Reumatologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 4,
      name: 'Dr. Manoel',
      position: 'Psquiatria',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 5,
      name: 'Dr. Juliano',
      position: 'Pediatria',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 6,
      name: 'Dr. Pedro',
      position: 'Neurologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      id: 8,
      name: 'Dr. Luciano',
      position: 'Oncologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 9,
      name: 'Dr. Paulo',
      position: 'Ortopedia',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 9,
      name: 'Dr. Ricardo',
      position: 'Urologia',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
  ]

  const [users, setUsers] = useState(data)

  const clickEventListener = () => {
    Alert.alert('Option selected')
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={users}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                clickEventListener()
              }}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.icon}
                  source={{ uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png' }}
                />
              </View>
              <Image style={styles.userImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => clickEventListener()}>
                    <Text style={styles.followButtonText}>Seguir</Text>
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
    width: 100,
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
})