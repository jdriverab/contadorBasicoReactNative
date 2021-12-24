import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        // <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Contador: {contador}
                </Text>

                    <TouchableOpacity onPress={()=>setContador(contador+1)}>
                        <View style={styles.button}>
                            <Text style={styles.textInButton}>+1 Aloja
                            </Text>
                        </View>
                    </TouchableOpacity>

                <Button title="Clickeame" onPress={()=>setContador(contador+1)}/>
                
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center"
    },

    title: {
        textAlign:"center",
        fontSize: 40,
        // position: "relative",
        top: -15
    },

    button: {
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
    },

    textInButton: {
        fontSize: 20,
        textAlign:"center",
        textAlignVertical:"center"                
    }
    
})

export default ContadorScreen;
