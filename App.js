import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginView from './screens/loginView';

const Stack = createNativeStackNavigator();

export default function App() {
  return(

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'none' }}>
        <Stack.Screen name="Login" component={loginView} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}