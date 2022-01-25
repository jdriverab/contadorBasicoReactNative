import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import SecondScreen from '../screen/SecondScreen';
import ThirdScreen from '../screen/ThirdScreen';


// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import PersonaScreen from '../screen/PersonaScreen';


// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                // headerStyle: { backgroundColor: 'papayawhip' },
                // contentStyle: {backgroundColor:'red', }, solo en nativeStack
                headerStyle: {elevation:0, shadowColor:'transparent'},
                cardStyle: {backgroundColor:'white'}, // solo en stacknavigator


            }}

        >

            {/* initialRouteName= "" - sirve para designar pagina princiapl */}
            {/* screenOption={{ }} - estilos o animaciones para la pagina */}
            <Stack.Screen name="firstPage" options={{title: 'Pagina 1'}} component={HomeScreen} />
            <Stack.Screen name="secondPage" options={{title: 'Pagina 2'}} component={SecondScreen} />
            <Stack.Screen name="thirdPage" options={{title: 'Pagina 3'}} component={ThirdScreen} />
            
            <Stack.Screen name="personaScreen" options={{title: 'Nueva pagina'}} component={PersonaScreen} />

        </Stack.Navigator>
    )
};

export default StackNavigator;
