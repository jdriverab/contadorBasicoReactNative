import React from 'react'
import { View, Text, Button } from 'react-native';
import { useState } from 'react';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        // <View style={{flex:1}}>
            <View style={{
                flex:1, 
                // backgroundColor:"red",
                justifyContent: "center"
                }}>
                <Text style={{
                    textAlign:"center",
                    fontSize: 40,
                    position: "relative",
                    top: -15
                    }}>
                    Contador: {contador}
                </Text>

                <Button title="Clickeame" onPress={()=>setContador(contador+1)}/>
                
            </View>
        // </View>
    )
}

export default ContadorScreen;
