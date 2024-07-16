import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('', { nickname, password });
            const { data } = response;
            Alert.alert('Login successful', `Welcome ${data.username}`);
            navigation.navigate('User', { username: data.username });
        } catch (error) {
            if (error.response) {
                Alert.alert('Login failed', error.response.data);
            } else {
                Alert.alert('Login failed', 'Error connecting to server');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nickname</Text>
            <TextInput
                style={styles.input}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Enter your nickname"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        marginBottom: 8,
        color: '#666',
    },
    input: {
        width: '100%',
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
};

export default LoginScreen;
