import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../login/LoginStyle';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
	const [email, setEmail] = useState('');
	const [passwordOne, setPasswordOne] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			if (email.length > 0 && passwordOne.length > 0) {
				if (passwordOne == passwordTwo) {
					navigation.navigate('Home');
				} else {
					setError('Passwords must be the same');
				}
			} else {
				setError('All fields must be full');
			}
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	};

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			keyboardShouldPersistTaps="handled"
			keyboardDismissMode="on-drag">
			<Text style={styles.header}>Register New Account</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					placeholder="Email..."
					placeholderTextColor="#003f5c"
					onChangeText={email => setEmail(email)}
					value={email}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					placeholder="Password..."
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={password => setPasswordOne(password)}
					value={passwordOne}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					placeholder="Confirm Password..."
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={password => setPasswordTwo(password)}
					value={passwordTwo}
				/>
			</View>

			<TouchableOpacity style={styles.loginBtn} disabled={loading} onPress={handleSubmit}>
				<Text style={styles.loginText}>{loading ? 'Loading...' : 'Register'}</Text>
			</TouchableOpacity>
			{error && <Text style={styles.errorText}>{error}</Text>}

			<StatusBar style="auto" />
		</ScrollView>
	);
}
