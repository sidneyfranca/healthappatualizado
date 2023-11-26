import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackNavigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Inicio'
        component={Home}
        options={{  
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='user' size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

