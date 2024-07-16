import React from 'react';
import {View , Text , Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';



const SettingsScreen = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    marginTop: 300
                }}
            > Settings Screen</Text>
        </View>
    );
}

export default SettingsScreen;