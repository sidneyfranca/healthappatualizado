import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Notification from './pages/Notification';
import Search from './pages/Search';
import Farmacia from './pages/Farmacia';
import { Medicamento } from "./pages/MedicamentoTela/Medicamento";
import { Favorito } from "./pages/FavoritoTela/Favorito";
import Profile from "./pages/Profile/index"
import { Entypo, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from './pages/Home/index'
import CadastromedView from './pages/Cadastros/cadastromed';
import CadastroView from './pages/Cadastros/cadastropaciente';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const FarmaciaStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Inicio"
        component={Home}
        options={{  
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='user' size={size} color={color} />
          ),
        }}
      />
      <RootStack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{ headerShown: false }}
        initialParams={{ screen: 'Perfil' }}
      />
      <RootStack.Screen
        name="CadastroMedico"
        component={CadastromedView}
        options={{ title: 'Cadastro Médico' }}
      />
      <RootStack.Screen
        name="CadastroPaciente"
        component={CadastroView}
        options={{ title: 'Cadastro Paciente' }}
      />
    </RootStack.Navigator>
  );
};

const FarmaciaStackScreen = () => {
  return (
    <FarmaciaStack.Navigator>
      <FarmaciaStack.Screen
        name="Voltar"
        component={Farmacia}
        options={{ headerShown: false }}
      />
      <FarmaciaStack.Screen
        name="Medicamento"
        component={Medicamento}
        options={{ gestureEnabled: false }}
      />
      <FarmaciaStack.Screen
        name="Favorito"
        component={Favorito}
        options={{ gestureEnabled: false }}
      />
    </FarmaciaStack.Navigator>
  );
};

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name='Perfil' 
        component={Profile} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name= 'user' size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                navigation.navigate('Inicio');
              }}>
              <Text style={{ color: 'blue' }}>Sair</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name='Medicos'
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Teleconsulta'
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="videocamera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Farmacia'
        component={FarmaciaStackScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="local-pharmacy" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStackScreen;