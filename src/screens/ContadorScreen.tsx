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
                            // flex: 1,
                            alignSelf:"center",
                            width: 130,
                            height: 50,
                            backgroundColor:"green",
                            borderRadius: 50,
                            borderColor: "red",
                            // borderBottomEndRadius: 30, 
                            borderWidth: 3,
                            marginBottom: 10,
                            borderStyle: ("dashed"),
                            justifyContent:"center"
                        }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign:"center",
                                textAlignVertical:"center"                
                            }}>
                                +1 Aloja
                            </Text>
                        </View>
                    </TouchableOpacity>

                <Button title="Clickeame" onPress={()=>setContador(contador+1)}/>
                
            </View>
        // </View>
    )
}

export default ContadorScreen;
