import React, { useEffect }  from 'react';
import { View, Text } from 'react-native';
import { styles } from '../appTheme/GlobalStyle';
// import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends NativeStackScreenProps <any, any>{}

interface Props extends StackScreenProps <any, any>{}


const PersonaScreen = ({route, navigation}:Props) => {

    useEffect(()=>{

        navigation.setOptions({
            // title:params!.nombre
        })
    },[])

    const params = route.params;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    )
};

export default PersonaScreen;
