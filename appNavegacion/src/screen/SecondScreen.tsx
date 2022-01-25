import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../appTheme/GlobalStyle';
import { useEffect } from 'react';

const SecondScreen = () => {

    const navigation = useNavigation<any>()

    useEffect(()=>{
        navigation.setOptions({
            title:'Hola mundo',
            // headerBackTitle: 'Atras' esto solo aplica en IOS
        })

    },[])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Esta es la pagina 2
        </Text>

        <Button title="ir pagina 1" onPress = {()=> {navigation.navigate("firstPage")}}/>
        <Button title="ir pagina 3" onPress = {()=> {navigation.navigate('thirdPage')}}/>
    </View>
    );
};

export default SecondScreen;
