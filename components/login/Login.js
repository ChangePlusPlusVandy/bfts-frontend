import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import loginStyles from './LoginStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const handleSubmit = async e => {
		if (email.length === 0 || password.length === 0) {
			alert("Please fill out all fields.");
			return;
		}
		try {
			signInWithEmailAndPassword(auth, email, password);
			navigation.navigate('Home');
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	};



	return (
		<KeyboardAvoidingView style={loginStyles.container} behavior="padding">
			<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 75 }}>
				<Image source={logo} style={loginStyles.logo} />
				<View style={loginStyles.inputField}>
					<Ionicons name="mail-outline" size={40} color="black" />
					<TextInput
						placeholder="Email"
						style={{ padding: 10, width: 270 }}
						onChangeText={text => setEmail(text)}
					/>
				</View>

				<View style={loginStyles.inputField}>
					<Ionicons name="lock-closed-outline" size={40} color="black" />
					<TextInput
						placeholder="Password"
						style={{ padding: 10, width: 270 }}
						onChangeText={text => setPassword(text)}
					/>
				</View>

				<TouchableOpacity style={loginStyles.loginBtn} onPress={() => handleSubmit()}>
					<Text style={loginStyles.loginText}>Login</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', marginTop: 2 }}>
					<Text>Don't have an account? </Text>
					<TouchableOpacity onPress={() => navigation.navigate("Register")}>
						<Text style={{ color: BFTS_BLUE, textDecorationLine: 'underline' }}>Register</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }} />
			</View>
		</KeyboardAvoidingView>
	);
}
