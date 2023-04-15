import React, { useState, Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import addClientStyles from './AddClientStyle';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AddClient = () => {
	const [race, setRace] = useState(null);
	const [background, setBackground] = useState(null);
	const [pronouns, setPronouns] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [livingSit, setLivingSit] = useState(null);
	const [selectedBurrough, setSelectedBurrough] = useState(null);
	const [selectedGender, setSelectedGender] = useState(null);

	const [token, setToken] = useState(null);

	auth.onAuthStateChanged(user => {
		if (user) {
			console.log('Getting token');
			user.getIdToken().then(tok => {
				setToken(tok);
			});
		}
	});

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', bearer: token },
		body: JSON.stringify({
			name: firstName + ' ' + lastName,
			gender: gender,
			birthday: Date.now(),
			pronouns: pronouns,
			location: selectedBurrough,
			livingSituation: livingSit,
			background: background,
			gender: selectedGender,
		}),
	};

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const burrough = [
		{ key: '1', value: 'Bronx' },
		{ key: '2', value: 'Brooklyn' },
		{ key: '3', value: 'Manhattan' },
		{ key: '4', value: 'Queens' },
		{ key: '5', value: 'Staten Island' },
	];
	const gender = [
		{ key: '1', value: 'Male' },
		{ key: '2', value: 'Female' },
		{ key: '3', value: 'Nonbinary' },
		{ key: '4', value: 'Other' },
	];

	const handleSubmit = async e => {
		console.log('Submitting');
		if (
			gender === null ||
			race === null ||
			background === null ||
			pronouns === null ||
			livingSit === null ||
			firstName === null ||
			lastName === null ||
			selectedBurrough === null ||
			selectedGender === null
		) {
			alert('Please fill out all fields.');
			return;
		}

		try {
			fetch('https://bfts-backend.herokuapp.com/clients/create', requestOptions).then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && (await response.json());

				if (!response.ok) {
					const err = (data && data.message) || response.status;
					return Promise.reject(err);
				}

				alert('Client successfully added.');
				navigation.navigate('Profile1');
			});
		} catch (error) {
			console.log('Failed to submit client');
			alert('Client failed to submit. Try again later.');
		}
	};

	return (
		<KeyboardAvoidingView style={addClientStyles.container} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 75 }}>
						<View style={addClientStyles.header}>
							<Text
								style={{
									padding: 10,
									width: 400,
									fontFamily: 'Montserrat_400Regular',
									fontSize: 33,
									fontWeight: 'regular',
									textAlign: 'center',
								}}>
								Client Information
							</Text>
						</View>
						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="First Name"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setFirstName(text)}
							/>
						</View>
						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="Last Name"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setLastName(text)}
							/>
						</View>

						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="Race"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setRace(text)}
							/>
						</View>

						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="Background"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setBackground(text)}
							/>
						</View>

						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="Pronouns"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setPronouns(text)}
							/>
						</View>
						<View style={addClientStyles.inputField}>
							<TextInput
								placeholder="Living Situation"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setLivingSit(text)}
							/>
						</View>

						<SelectList
							setSelected={val => setSelectedBurrough(val)}
							data={burrough}
							save="value"
							boxStyles={{
								borderColor: '#F2F2F2',
								borderRadius: 10,
								width: 320,
								height: 47,
								backgroundColor: '#F2F2F2',
							}}
						/>

						<SelectList
							setSelected={val => setSelectedGender(val)}
							data={gender}
							save="value"
							boxStyles={{
								borderColor: '#F2F2F2',
								borderRadius: 10,
								margin: 15,
								width: 320,
								height: 47,
								backgroundColor: '#F2F2F2',
							}}
						/>

						<TouchableOpacity style={addClientStyles.submitBtn} onPress={() => handleSubmit()}>
							<Text style={addClientStyles.infoText}>Submit</Text>
						</TouchableOpacity>

						<View style={{ flex: 1 }} />
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default AddClient;
