import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {styles} from '../appTheme/GlobalStyle';

interface Props extends StackScreenProps <any, any>{}

const ThirdScreen = ({navigation}: Props) => {
  return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Tercera pagina</Text>
            <Button title="ir pagina 1" onPress = {()=> navigation.popToTop() }/>
            <Button title="ir pagina 2" onPress = {()=> navigation.pop() }/>

        </View>
    )
};


export default ThirdScreen;
