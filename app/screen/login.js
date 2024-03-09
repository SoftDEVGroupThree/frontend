import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors} from '../../component/colors';


export default function  LoginScreen() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    //wait for backend
    console.log('Email:', email);
    console.log('Password:', password);
};


return (
    <View style={styles.container}>
    <Text style={styles.title}>Meety Meeting Me</Text>
    <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
    />
    <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.registerButton}>
        <Link href="screen/register">
        <Text style={styles.registerText}>Register</Text>
        </Link>
    </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 30,
    },
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    input: {
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    },
    button: {
    backgroundColor: colors.dark,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    },
    buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    registerButton: {
    backgroundColor: colors.dark,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    },
    registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});
