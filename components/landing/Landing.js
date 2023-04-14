import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import logo from '../../assets/B_logo.png';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import landingStyles from './LandingStyles';
import { useNavigation } from '@react-navigation/native';
import EditProfile from '../profile/EditClientProfile';
import { useState } from 'react';
import EditVolunteerProfile from '../profile/EditVolunteerProfile';
import CreatePost from '../post/CreatePost';

export default function Landing() {
	const navigation = useNavigation();

	const [sumbitted, setSubmittedValue] = useState(false);

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BFTS_WHITE }}>
			<Image source={logo} style={landingStyles.logo} />

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
				<Text style={{ fontWeight: 'bold', fontSize: 19, fontFamily: 'Montserrat_700Bold' }}>Login</Text>
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
				<Text style={{ fontWeight: 'bold', fontSize: 19, color: 'white', fontFamily: 'Montserrat_700Bold' }}>
					Register
				</Text>
			</TouchableOpacity>
		</View>
	);
}
