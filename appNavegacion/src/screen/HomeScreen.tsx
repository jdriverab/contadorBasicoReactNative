import React from 'react';
// import { StackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {styles} from '../appTheme/GlobalStyle';
import { useEffect } from 'react';

interface Props extends StackScreenProps <any, any>{}

const HomeScreen = ({navigation}:Props) => {

    

  return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Holis
            </Text>

            <Button title="ir pagina 2" onPress = {()=> navigation.navigate('secondPage') }/>
            <Button title='ir Persona' onPress={()=> navigation.navigate('personaScreen')}/>

            <Text>Navegar con argumentos</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('personaScreen',{id:1, nombre:'Javi'})}><Text>Pedro</Text></TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
