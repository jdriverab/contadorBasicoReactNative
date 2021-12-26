import React from 'react';
import {Text, View} from 'react-native';

const HolaMundoScreen = () => {
    return (
      <View style={{
        flex: 1, 
        backgroundColor: 'orange', 
        justifyContent: 'center' 
        }}>
          <Text style={{
            fontSize:55
          }}>
            Hola Mundo, como estas
          </Text>
      </View>
    );
};

export default HolaMundoScreen;

