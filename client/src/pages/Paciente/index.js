import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { api } from "../../lib/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default PacientesAgendados = () => {

  const [pacientes, setPacientes] = useState([]);
  const [loggedInDoctorId, setLoggedInDoctorId] = useState(null);

  useEffect(() => {
    const fetchLoggedInDoctorId = async () => {
      try {
        const medicoData = await AsyncStorage.getItem('medico');
        const medico = JSON.parse(medicoData);
        setLoggedInDoctorId(medico.id || medico._id);
      } catch (error) {
        console.error('Erro ao obter o ID do médico logado:', error);
      }
    };

    const fetchScheduledAppointments = async () => {
      try {
        const response = await api.get(`/agendamento/medico/${loggedInDoctorId}`);
        setPacientes(response.data);
      } catch (error) {
        console.error('Erro ao obter agendamentos do médico:', error);
      }
    };

    fetchLoggedInDoctorId();
    fetchScheduledAppointments();
  }, [loggedInDoctorId]);

  const handleRemovePatient = async (pacienteId) => {
    try {
      const response = await api.delete(`/agendamento/remover/${pacienteId}/${loggedInDoctorId}`);
      
      if (response.data.success) {
        console.log('Agendamento removido com sucesso.');
  
        fetchScheduledAppointments();
      } else {
        console.error('Erro ao remover agendamento:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao remover agendamento:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={pacientes}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id_agendamento.toString()}
        renderItem={({ item }) => {
          console.log('Renderizando item:', item);
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
              }}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.icon}
                  source={{ uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png' }}
                />
              </View>
              <View style={styles.cardFooter}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.name}>{item.nome_paciente}</Text>
                  <Text style={styles.position}>{item.especialidade}</Text>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'red' }]}
                    onPress={() => handleRemovePatient(item.id_paciente)}>
                    <Icon name="delete" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlePrescribe(item.id_paciente)}>
                    <Text style={styles.buttonText}>Prescrever</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleCall(item.telefone)}>
                    <Icon name="phone" size={20} color="black" />
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
  button: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
})