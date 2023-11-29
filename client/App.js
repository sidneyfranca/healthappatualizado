import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}


