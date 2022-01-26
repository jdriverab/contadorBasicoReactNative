import React, { useEffect }  from 'react';
import { View, Text } from 'react-native';
import { styles } from '../appTheme/GlobalStyle';
// import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface Props extends NativeStackScreenProps <any, any>{}

// Se usa para metodo rapido para asignar los params recibidos
// interface RouterParams {
//     id:number;
//     nombre: 'string'
// }

interface Props extends StackScreenProps <RootStackParams, 'personaScreen'>{}


const PersonaScreen = ({route, navigation}:Props) => {
    
    // metodo rapido
    // const params = route.params as RouterParams;
    const params = route.params 


    useEffect(()=>{

        navigation.setOptions({
            title: params!.nombre
        })
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    )
};

export default PersonaScreen;
