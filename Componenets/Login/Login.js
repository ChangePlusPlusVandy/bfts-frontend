import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './LoginStyle'; 


export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        //   await login(email, password);
        //   history.push("/"); // Redirect to home page

        // temporary, with real page won't need to clear 
        // email and password fields
            setEmail("");
            setPassword("");
        } catch (error) {
          setError(error.message);
        }
        setLoading(false);
      };
    

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
                <TouchableOpacity style={styles.forgotBtn}>
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

        </ScrollView>
    );
}
