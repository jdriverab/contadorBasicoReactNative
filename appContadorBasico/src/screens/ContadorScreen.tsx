import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import BotonAccion from '../components/BotonAccion';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        // <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Contador: {contador}
                </Text>

                <View style={styles.fabLocation}>

                    <BotonAccion titleButton='-1' value={-1} onPress={()=>setContador(contador - 1)} position="bl"/>

                    <BotonAccion titleButton='+1' value={1} onPress={()=>setContador(contador + 1)}/>
                    

                    {/* <TouchableOpacity style={styles.fabLocationBL} onPress={()=>setContador(contador-1)}>
                        <View style={styles.fab
                            // styles.button
                            }>
                            <Text style={ styles.fabText
                                // styles.textInButton
                                }>-1
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.fabLocationBR} onPress={()=>setContador(contador+1)}>
                        <View style={styles.fab
                            // styles.button
                            }>
                            <Text style={ styles.fabText
                                // styles.textInButton
                                }>+1
                            </Text>
                        </View>
                    </TouchableOpacity> */}


                </View>

                {/* <Button title="Clickeame" onPress={()=>setContador(contador+1)}/> */}
                
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

    // button: {
    //     // flex: 1,
    //     alignSelf:"center",
    //     width: 130,
    //     height: 50,
    //     backgroundColor:"green",
    //     borderRadius: 50,
    //     borderColor: "red",
    //     // borderBottomEndRadius: 30, 
    //     borderWidth: 3,
    //     marginBottom: 10,
    //     borderStyle: ("dashed"),
    //     justifyContent:"center"
    // },

    // textInButton: {
    //     fontSize: 20,
    //     textAlign:"center",
    //     textAlignVertical:"center"                
    // },

    fabLocation:{
        position: "absolute",
        bottom: 80,
        // righ: 0,
        flexDirection: "row",
        alignSelf:"center", 
        // justifyContent:"space-between"
        // alignItems:"center"
        // alignContent:"space-between",
        // alignItems:"center"
    },

    // fabLocationBL:{
    //     // position: "absolute",
    //     // bottom: 25,
    //     left:-70
    // },

    // fabLocationBR:{
    //     // position: "absolute",
    //     // bottom: 25,
    //     right: -70,
    //     // left: 0,
    // },

    // fab: {
    //     backgroundColor: "#5856d6",
    //     width: 60,
    //     height: 60, 
    //     borderRadius:100,
    //     justifyContent:"center",
    //     alignItems:"center"

    // },
    
    // fabText: {
    //     color: "white",
    //     fontSize: 25,
    //     fontWeight:"bold",
    //     // alignSelf:"center"
    // }
    
})

export default ContadorScreen;
