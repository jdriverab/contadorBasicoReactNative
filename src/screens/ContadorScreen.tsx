import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
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

                    <TouchableOpacity onPress={()=>setContador(contador+1)}>
                        <View style={{
                            backgroundColor:"red",
                            borderRadius: 100
                        }}>
                            <Text>+1</Text>
                        </View>
                    </TouchableOpacity>

                <Button title="Clickeame" onPress={()=>setContador(contador+1)}/>
                
            </View>
        // </View>
    )
}

export default ContadorScreen;
