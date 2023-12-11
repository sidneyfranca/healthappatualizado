import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import { api } from '../../lib/api';

export default function InicioScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [userType, setUserType] = useState('paciente');

  const handleLoginPaciente = async () => {
    try {
      const userData = {
        email: email,
        senha: senha,
      };

      const response = await api.post("/login/paciente", userData);
      if (response.data.success) {

        const pacienteData = response.data.paciente;
        console.log('Informações do paciente:', pacienteData);

        await AsyncStorage.setItem('paciente', JSON.stringify(pacienteData));

        navigation.navigate('MainTabNavigator', { userType: 'paciente', screen: 'Pacientes' });
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
    }
  };

  const handleLoginMedico = async () => {
    try {
      const userData = {
        email: email,
        senha: senha,
      };

      const response = await api.post("/login/medico", userData);
      if (response.data.success) {
        const medicoData = response.data.medico;
        console.log('Informações do médico:', medicoData);

        await AsyncStorage.setItem('medico', JSON.stringify(medicoData));

        navigation.navigate('MainTabNavigator', { userType: 'medico', screen: 'Medicos' });
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem-Vinde ao HealthApp!</Text>
        <Text style={styles.desc}>{'Aqui você poderá acompanhar a sua saúde e ter atendimento especializado 24h por dia.'}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={[styles.icon, styles.inputIcon]}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={[styles.icon, styles.inputIcon]}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={text => setSenha(text)}
        />
      </View>

      <TouchableOpacity style={styles.restoreButtonContainer}>
        <Text >Esqueceu seu e-mail?</Text>
      </TouchableOpacity>

      <Text style={styles.desc}>Escolha se você quer fazer login como paciente ou médico</Text>

      <View style={[styles.radioContainer]}>
        <TouchableOpacity style={[styles.radioButton, { backgroundColor: 'white' }]} onPress={() => setUserType('paciente')}>
          <View style={styles.radioButton}>
            <RadioButton
              value="paciente"
              status={userType === 'paciente' ? 'checked' : 'unchecked'}
              onPress={() => setUserType('paciente')}
              color="#000"
              uncheckedColor="#000"
            />
            <Text>Paciente</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.verticalLine} />

        <TouchableOpacity style={[styles.radioButton, { backgroundColor: 'white' }]} onPress={() => setUserType('medico')}>
          <View style={styles.radioButton}>
            <RadioButton
              value="medico"
              status={userType === 'medico' ? 'checked' : 'unchecked'}
              onPress={() => setUserType('medico')}
              color="#000"
              uncheckedColor="#000"
            />
            <Text>Médico</Text>
          </View>
        </TouchableOpacity>
      </View>


      <TouchableOpacity onPress={userType === 'paciente' ? handleLoginPaciente : handleLoginMedico} style={[styles.buttonContainer, styles.loginButton]}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroMedico')} style={styles.buttonContainer}>
        <Text style={styles.loginText}>Cadastro de Médico</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroPaciente')} style={styles.buttonContainer}>
        <Text style={styles.loginText}>Cadastro de Paciente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#4682B4'
  },
  loginButton: {
    backgroundColor: '#3498db'
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  content: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00bffe',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#808080',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 5,
    margin: 5,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
})