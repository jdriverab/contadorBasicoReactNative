import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';


interface Props {
    titleButton: string,
    value: number;
    position?: "br" | "bl";
    onPress: ()=>void;
    
}

const BotonAccion = ({titleButton, value, onPress, position = "br"}:Props) => {
    return (
        // <TouchableOpacity style={[
        <View style={[styles.fabLocation, (position === "bl" ? styles.left : styles.right)]}>

            <TouchableNativeFeedback onPress={onPress} 
            background={TouchableNativeFeedback.Ripple("#28425B",false, 30)}>

                <View style={styles.fab
                    // styles.button
                }>
                    <Text style={styles.fabText
                        // styles.textInButton
                    }>{titleButton}
                    </Text>
                </View>

            </TouchableNativeFeedback>
        </View>
    )
}


const styles = StyleSheet.create({

    fabLocation:{
        position: "absolute",
        bottom: 25,
    },

    left:{
        left:-100        
    },

    right:{
        right: -100,
    },

    fab: {
        backgroundColor: "#5856d6",
        width: 60,
        height: 60, 
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center"
        ,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

        

    },

    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight:"bold",
        // alignSelf:"center"
    }
})

export default BotonAccion
