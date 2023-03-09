import { React, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import logo from '../../assets/logo.png';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import landingStyles from './LandingStyles';
import { useNavigation } from '@react-navigation/native';
import * as SMS from 'expo-sms';

export default function Landing() {
	const navigation = useNavigation();
	const [isAvailable, setIsAvailable] = useState(false);

	useEffect(() => {
		async function checkAvailability() {
			const isSmsAvailable = await SMS.isAvailableAsync();
			setIsAvailable(isSmsAvailable);
		}
		checkAvailability();
	}, []);

	const sendSms = async () => {
		await SMS.sendSMSAsync(['6157239815'], 'Send Help');
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BFTS_WHITE }}>
			<Image source={logo} style={landingStyles.logo} />

			{isAvailable ? <Button title="Send SMS" onPress={sendSms} /> : <Text>No SMS</Text>}

			<TouchableOpacity
				style={{
					backgroundColor: BFTS_WHITE,
					borderColor: BFTS_BLUE,
					width: 300,
					height: 65,
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 3,
					borderRadius: 15,
					padding: 5,
				}}
				onPress={() => navigation.navigate('Login')}>
				<Text style={{ fontWeight: 'bold', fontSize: 19 }}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					marginTop: 15,
					backgroundColor: BFTS_BLUE,
					borderColor: BFTS_WHITE,
					width: 300,
					height: 65,
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 0,
					borderRadius: 15,
					padding: 5,
				}}
				onPress={() => navigation.navigate('Register')}>
				<Text style={{ fontWeight: 'bold', fontSize: 19, color: 'white' }}>Register</Text>
			</TouchableOpacity>
		</View>
	);
}
