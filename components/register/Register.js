import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';
import loginStyles from '../login/LoginStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
	const [email, setEmail] = useState('');
	const [passwordOne, setPasswordOne] = useState('');
	//const [passwordTwo, setPasswordTwo] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const handleSubmit = async e => {
		console.log('Submitting');
		if (email.length === 0 || passwordOne.length === 0) {
			alert('Please fill out all fields.');
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, email, passwordOne);
			navigation.navigate('Home');
		} catch (error) {
			alert('Failed to create user.');
		}
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
						onChangeText={text => setPasswordOne(text)}
					/>
				</View>

				<TouchableOpacity style={loginStyles.loginBtn} onPress={() => handleSubmit()}>
					<Text style={loginStyles.loginText}>Register</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', marginTop: 2 }}>
					<Text>Already have an account? </Text>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={{ color: BFTS_BLUE, textDecorationLine: 'underline' }}>Login</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }} />
			</View>
		</KeyboardAvoidingView>

		// <ScrollView
		// 	contentContainerStyle={styles.container}
		// 	keyboardShouldPersistTaps="handled"
		// 	keyboardDismissMode="on-drag">
		// 	<Text style={styles.header}>Register New Account</Text>
		// 	<View style={styles.inputView}>
		// 		<TextInput
		// 			style={styles.textInput}
		// 			placeholder="Email..."
		// 			placeholderTextColor="#003f5c"
		// 			onChangeText={email => setEmail(email)}
		// 			value={email}
		// 		/>
		// 	</View>

		// 	<View style={styles.inputView}>
		// 		<TextInput
		// 			style={styles.textInput}
		// 			placeholder="Password..."
		// 			placeholderTextColor="#003f5c"
		// 			secureTextEntry={true}
		// 			onChangeText={password => setPasswordOne(password)}
		// 			value={passwordOne}
		// 		/>
		// 	</View>
		// 	<View style={styles.inputView}>
		// 		<TextInput
		// 			style={styles.textInput}
		// 			placeholder="Confirm Password..."
		// 			placeholderTextColor="#003f5c"
		// 			secureTextEntry={true}
		// 			onChangeText={password => setPasswordTwo(password)}
		// 			value={passwordTwo}
		// 		/>
		// 	</View>

		// 	<TouchableOpacity style={styles.loginBtn} disabled={loading} onPress={handleSubmit}>
		// 		<Text style={styles.loginText}>{loading ? 'Loading...' : 'Register'}</Text>
		// 	</TouchableOpacity>
		// 	{error && <Text style={styles.errorText}>{error}</Text>}

		// 	<StatusBar style="auto" />
		// </ScrollView>
	);
}
