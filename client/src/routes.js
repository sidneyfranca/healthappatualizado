import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Farmacia from './pages/Farmacia';
import { Medicamento } from "./pages/MedicamentoTela/Medicamento";
import { Favorito } from "./pages/FavoritoTela/Favorito";
import { createAppContainer } from 'react-navigation';
import { Entypo, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const FarmaciaStack = createStackNavigator();

const Rotas = createAppContainer(
  createStackNavigator({
    home: Home,
    inicio: App.js,
  })
);

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

const MainTabNavigator = () => {
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
        name='Inicio'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
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
   {/* <Tab.Screen
        name='Perfil'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name='user' size={size} color={color} />
          ),
        }}
      />*/}
      </Tab.Navigator>
      );
};

export default MainTabNavigator;