import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { api } from "../../lib/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Users = () => {

  const [medicos, setMedicos] = useState([]);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [loggedInPatientId, setLoggedInPatientId] = useState(null);


  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await api.get('/medicos');
        setMedicos(response.data);
        console.log('Conteúdo de users:', response.data);
      } catch (error) {
        console.error('Erro ao obter médicos:', error);
      }
    };

    fetchMedicos();
  }, []);

  useEffect(() => {
    const fetchPatientId = async () => {
      try {
        const patientData = await AsyncStorage.getItem('paciente');
        const patient = JSON.parse(patientData);
        setLoggedInPatientId(patient.id);
      } catch (error) {
        console.error('Erro ao obter o ID do paciente logado:', error);
      }
    };
  
    fetchPatientId();
  }, []);

  const clickEventListener = async (medico) => {
  setSelectedMedico(medico);

  Alert.alert(
    'Informações do Médico',
    `Nome: ${medico.nome}\nCRM: ${medico.crm}\nEspecialidade: ${medico.especialidade}\nTelefone: ${medico.telefone}\nHorário: 14:00 - 15:00`,
    [
      { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      {
        text: 'Agendar',
        onPress: async () => {
          if (loggedInPatientId) {
            try {
              const response = await api.post('/agendar', {
                id_paciente: loggedInPatientId,
                id_medico: medico.id,
              });
      
              console.log('Resposta do servidor:', response.data);
            } catch (error) {
              console.error('Erro ao agendar consulta:', error);
            }
          } else {
            console.error('ID do paciente não disponível.');
          }
        },
      }
    ],
    { cancelable: false }
  );
};

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={medicos}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                clickEventListener(item)
              }}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.icon}
                  source={{ uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png' }}
                />
              </View>
              <View style={styles.cardFooter}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.name}>{item.nome}</Text>
                  <Text style={styles.position}>{item.especialidade}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => clickEventListener(item)}>
                    <Text style={styles.followButtonText}>Agendar</Text>
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