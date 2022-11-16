import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './LoginStyle'; 
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            setEmail("");
            setPassword("");
            navigation.navigate("Home");
            
        } catch (error) {
          setError(error.message);
        }
        setLoading(false);
      };

      const handleRegister = async(e) => {
        try {
            navigation.navigate("Register");
        }
        catch (error) {
            setError(error.mesage);
        }
      }
    

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag'>
            <Text style={styles.header}>Welcome to Backpacks for the Street!</Text>
            <Text style={styles.header}>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
            </View>

            <View style={styles.textClicks}>
                <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={styles.linksText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotBtn}
                    onPress={handleRegister}>

                    <Text style={styles.linksText}>Register new account?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={styles.loginBtn}
                disabled={loading} 
                onPress={handleSubmit}>

                <Text style={styles.loginText}>{loading ? "Loading..." : "LOGIN"}</Text>
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}

        <StatusBar style='auto'/>
        </ScrollView>
    );
}
