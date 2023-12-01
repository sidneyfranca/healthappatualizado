import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../lib/api';

export default function InicioScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const userData = {
        email: email,
        senha: senha,
      };

    const response = await api.post("/login", userData);  

      if (response.data.success) {
        navigation.navigate('MainTabNavigator', { screen: 'Perfil' });
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

      <TouchableOpacity onPress={handleLogin} style={[styles.buttonContainer, styles.loginButton]}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroMedico')} style={styles.buttonContainer}>
        <Text style={styles.loginText}>Cadastro de Médico</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroPaciente')} style={styles.buttonContainer}>
        <Text style={styles.loginText}>Cadastro de Paciente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/color/70/000000/facebook.png' }}
          />
          <Text style={styles.loginText}>Continue com Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/color/70/000000/youtube.png' }}
          />
          <Text style={styles.loginText}>Seguir no Youtube</Text>
        </View>
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
  fabookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#ff0000',
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
    marginTop: 30,
    color: '#808080',
    marginBottom:45,
},
})
