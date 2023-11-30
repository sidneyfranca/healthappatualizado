import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { api } from '../../lib/api';

export default CadastromedView = () => {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [crm, setCrm] = useState()
  const [cpf, setCpf] = useState()
  const [especialidade, setEspecialidade] = useState()
  const [telefone, setTelefone] = useState()
 
  const handleCadastro = async () => {
    if (validateForm()) {
      const userData = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        crm: crm,
        especialidade: especialidade,
        telefone: telefone,
      };

      try {
        await api.post("/cadastro/medico", userData);
        alert("Cadastro efetuado com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar");
      }
    }
  };
  const validateForm = () => {
    if (!nome || nome.trim() === '') {
      Alert.alert('Erro', 'Nome completo é obrigatório.');
      return false;
    }

    if (!email || email.trim() === '') {
      Alert.alert('Erro', 'Email é obrigatório.');
      return false;
    }
    if (!senha || senha.trim() === '') {
      Alert.alert('Erro', 'Senha é obrigatória.');
      return false;
    }

    if (!crm || crm.trim() === '') {
      Alert.alert('Erro', 'CRM é obrigatório.');
      return false;
    }

    if (!cpf || cpf.trim() === '') {
      Alert.alert('Erro', 'CPF/CNPJ é obrigatório.');
      return false;
    }

    if (!especialidade || especialidade.trim() === '') {
      Alert.alert('Erro', 'Especialidade é obrigatória.');
      return false;
    }

    if (!telefone || telefone.trim() === '') {
      Alert.alert('Erro', 'Telefone é obrigatório.');
      return false;
    }

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
          onChangeText={nome => setNome(nome)}
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
          onChangeText={email => setEmail(email)}
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
          onChangeText={senha => setSenha(senha)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/material/24/doctors-bag.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="CRM"
          keyboardType='number-pad'
          underlineColorAndroid="transparent"
          onChangeText={crm => setCrm(crm)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://icons8.com.br/icon/83811/touch-id' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="CPF/CNPJ"
          keyboardType='number-pad'
          underlineColorAndroid="transparent"
          onChangeText={cpf => setCpf(cpf)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/50/medical-doctor.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Especialidade"
          keyboardType='email-address'
          underlineColorAndroid="transparent"
          onChangeText={especialidade => setEspecialidade(especialidade)}
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
          onChangeText={telefone => setTelefone(telefone)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={handleCadastro}>
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