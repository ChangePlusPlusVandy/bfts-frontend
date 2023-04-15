import React, { useState, Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import infoStyles from './InfoStyle';

const Info = ({navigation, route}) => {
	const [race, setRace] = useState(null);
	const [background, setBackground] = useState(null);
	const [phoneNum, setPhoneNum] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [pronouns, setPronouns] = useState(null);
	const [selectedBurrough, setSelectedBurrough] = useState(null);
	const [selectedGender, setSelectedGender] = useState(null);


	const id = route.params.id;
	const token = route.params.token;
	const emailAdd = route.params.email;

	console.log(id)
	console.log(token)
	console.log(emailAdd)

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	//const navigation = useNavigation();

	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json", "bearer": token },
		body: JSON.stringify({
			name: firstName + " " + lastName,
			firebaseid: id,
			pronouns: pronouns,
			race: race,
			birthday: Date.now(),
			location: selectedBurrough,
			phone: phoneNum,
			email: emailAdd,
			vaccination: true,
			startdate: Date.now(),
			startlocation: selectedBurrough,
			background: background
		})
	}

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
			phoneNum === null ||
			pronouns === null ||
			firstName === null ||
			lastName === null ||
			selectedBurrough === null ||
			selectedGender === null
		) {
			alert('Please fill out all fields.');
			return;
		}

		try {
			// Calling fetch

			console.log(requestOptions)
			
			fetch("https://bfts-backend.herokuapp.com/volunteers/create", requestOptions).then(async (response) => {
				const isJson = response.headers.get("content-type")?.includes("application/json");
				const data = isJson && (await response.json());

				console.log("Awaiting response");

				if (!response.ok) {
					const err = (data && data.message) || response.status;
                    return Promise.reject(err);
				}
				console.log("Successfully created user.");
				navigation.navigate('Home', {token: token, id: id});
			})
			.catch((error) => {
				console.log("Did not create volunteer successfully.")
				console.log(error);
			})

		} catch (error) {
			alert('Failed to submit information.');
		}
	};

	return (
		<KeyboardAvoidingView style={infoStyles.container} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 60 }}>
						<View style={infoStyles.header}>
							<Text
								style={{
									padding: 3,
									width: 400,
									fontFamily: 'Montserrat_400Regular',
									fontSize: 30,
									fontWeight: 'regular',
									textAlign: 'center',
								}}>
								Volunteer Registration
							</Text>
						</View>
						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="First Name"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setFirstName(text)}
							/>
						</View>
						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="Last Name"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setLastName(text)}
							/>
						</View>

						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="Race"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setRace(text)}
							/>
						</View>

						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="Background"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setBackground(text)}
							/>
						</View>

						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="Phone number"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setPhoneNum(text)}
							/>
						</View>
						<View style={infoStyles.inputField}>
							<TextInput
								placeholder="Pronouns"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setPronouns(text)}
							/>
						</View>

						<SelectList
							setSelected={val => setSelectedBurrough(val)}
							data={burrough}
							save="value"
							placeholder="Select Burrough"
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
							placeholder="Gender"
							boxStyles={{
								borderColor: '#F2F2F2',
								borderRadius: 10,
								margin: 15,
								width: 320,
								height: 47,
								backgroundColor: '#F2F2F2',
							}}
						/>

						<TouchableOpacity style={infoStyles.submitBtn} onPress={() => handleSubmit()}>
							<Text style={infoStyles.infoText}>Submit</Text>
						</TouchableOpacity>

						<View style={{ flex: 1 }} />
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Info;
