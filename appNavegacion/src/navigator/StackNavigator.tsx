import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import SecondScreen from '../screen/SecondScreen';
import ThirdScreen from '../screen/ThirdScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="1" component={HomeScreen} />
              <Stack.Screen name="2" component={SecondScreen} />
              <Stack.Screen name="3" component={ThirdScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    )
};

export default StackNavigator;
