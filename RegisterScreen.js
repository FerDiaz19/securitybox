import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'The passwords do not match');
            return;
        }

        const user = {
            name,
            lastname,
            nickname,
            email,
            password,
        };

        try {
            const response = await axios.post('http://192.168.1.100:3000/register', user);
            Alert.alert('Registration successful', response.data);
            navigation.navigate('Login');
        } catch (error) {
            if (error.response) {
                Alert.alert('Registration failed', error.response.data);
            } else {
                Alert.alert('Registration failed', 'Error connecting to server');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />
            <Text style={styles.label}>Lastname</Text>
            <TextInput
                style={styles.input}
                value={lastname}
                onChangeText={setLastname}
                placeholder="Enter your lastname"
            />
            <Text style={styles.label}>Nickname</Text>
            <TextInput
                style={styles.input}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Enter your nickname"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="Confirm your password"
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
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
});

export default RegisterScreen;
