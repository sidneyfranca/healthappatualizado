const StackNavigation = () => {
    return (
  <StackNavigation.Navigator>
    <StackNavigation.Screen name='Perfil'
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name='user' size={size} color={color} />
            ),
          }}></StackNavigation.Screen>
  </StackNavigation.Navigator>);
  };