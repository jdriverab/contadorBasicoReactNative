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
            
            <View style={{flexDirection:'row'}}>

                <TouchableOpacity style={{...styles.button, backgroundColor:'#5956D6'}} onPress={()=> 
                navigation.navigate('personaScreen',{id:1, nombre:'Javi'})}>
                    <Text style={styles.buttonText}>Dicen Javier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=> 
                navigation.navigate('personaScreen',{id:2, nombre:'Maria'})}>
                    <Text style={styles.buttonText}>Dijo Maria</Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;
