import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import axios, { Axios } from 'axios';
import { api } from '../../lib/api';
export default CadastroView = () => {

  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [idade, setIdade] = useState()
  const [cpf, setCpf] = useState()
  const [endereco, setEndereco] = useState()
  const [telefone, setTelefone] = useState()

  
  const handleCadastro = async () => {
    if (validateForm()) {
      const userData = {
        nome: fullName,
        email: email,
        senha: senha,
        idade: idade,
        cpf: cpf,
        endereço: endereço,
        telefone: telefone,
      };

      try {
        await api.post("http://localhost:3301", userData);
        alert("Cadastro efetuado com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar");
      }
    }
  };
  const validateForm = () => {
    if (!fullName || fullName.trim() === '') {
      Alert.alert('Erro', 'Nome completo é obrigatório.');
      return false;
    }

    if (!email || email.trim() === '') {
      Alert.alert('Erro', 'Email é obrigatório.');
      return false;
    }
    if (!password || password.trim() === '') {
      Alert.alert('Erro', 'Senha é obrigatória.');
      return false;
    }

    if (!idade || idade.trim() === '') {
      Alert.alert('Erro', 'idade é obrigatório.');
      return false;
    }

    if (!cpf || cpf.trim() === '') {
      Alert.alert('Erro', 'CPF/CNPJ é obrigatório.');
      return false;
    }

    if (!endereço || endereço.trim() === '') {
      Alert.alert('Erro', 'Especialidade é obrigatória.');
      return false;
    }

    if (!telefone || telefone.trim() === '') {
      Alert.alert('Erro', 'Telefone é obrigatório.');
      return false;
    }


    const handleCadastro = () => {
      if (validateForm()) {
        
        Alert.alert('Cadastro efetuado com sucesso');
      }
    };
     
    return true;
  };
  showAlert = viewId => {
    Alert.alert(viewId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Nome Completo"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={fullName => setFullName({ fullName })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail({ email })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setPassword({ password })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
         source={{ uri:'https://img.icons8.com/material/24/age.png'}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Idade"
          keyboardType='number-pad'
          underlineColorAndroid="transparent"
          onChangeText={idade => setIdade({ idade })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
         source={{ uri: 'https://img.icons8.com/material/24/touch-id--v1.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="CPF"
          keyboardType='number-pad'
          underlineColorAndroid="transparent"
          onChangeText={cpf => setCpf({ cpf })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
        source={{ uri: 'https://img.icons8.com/material/24/address--v2.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Endereço"
          keyboardType='email-address'
          underlineColorAndroid="transparent"
          onChangeText={endereco => setEndereco({ endereco })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
         source={{ uri: 'https://img.icons8.com/material/24/mobile-package-tracking.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Telefone"
          keyboardType='number-pad'
          underlineColorAndroid="transparent"
          onChangeText={telefone => setTelefone({ telefone })}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={(handleCadastro) => showAlert('Cadastro efetuado com sucesso')}>
        <Text style={styles.signUpText}>Cadastrar</Text>
      </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bffe',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#00FFFF',
  },
  signUpText: {
    color: 'white',
  },
})
