import React, { useState, Component, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';
import { BFTS_WHITE } from '../../constants';
import infoStyles from '../info/InfoStyle';
import EditField from './EditField';
import { auth } from '../../firebase';

const EditVolunteerProfile = ({navigation, route}) => {

	const vol = route.params.volunteer;
	const update = route.params.change;

	const [volunteer, setVolunteer] = useState(vol);

	const [background, setBackground] = useState(volunteer.background);
	const [phoneNum, setPhoneNum] = useState(volunteer.phone);

	const name = volunteer.name

	const fName = name.substring(0, name.indexOf(' '));
	const lName = name.substring(name.indexOf(' ')+1);

	const [firstName, setFirstName] = useState(fName);
	const [lastName, setLastName] = useState(lName);
	const [selectedBurrough, setSelectedBurrough] = useState(volunteer.location);
	const [selectedGender, setSelectedGender] = useState(volunteer.gender);
	const [pronouns, setPronouns] = useState(volunteer.pronouns)

	const [editBackground, setEditBackground] = useState(false);
	const [editPhoneNum, setEditPhoneNum] = useState(false);
	const [editFirst, setEditFirst] = useState(false);
	const [editLast, setEditLast] = useState(false);
	const [editPronouns, setEditPronouns] = useState(false);


	const [token, setToken] = useState(null);

	const getToken = async () => {
		const token = auth.onAuthStateChanged((user) => {
			if (user) {
				user.getIdToken().then((tok) => { setToken(tok); return tok;});
			}
		});
		return await token;
	}

	getToken();

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

		try {
			// Calling fetch
			const requestOptions = {
				method: 'PATCH',
				headers: { "Content-Type": "application/json", "bearer": token },
				body: JSON.stringify({
					volunteerId: volunteer._id,
					name: firstName + " " + lastName,
					location: selectedBurrough,
					phone: parseInt(phoneNum),
					email: volunteer.email,
					pronouns: pronouns,
					vaccination: true,
					background: background,
					gender: selectedGender
				})
			}

			console.log("Submitting changes");

			fetch("https://bfts-backend.herokuapp.com/volunteers/updateById", requestOptions).then(async (response) => {
				const isJson = response.headers.get("content-type")?.includes("application/json");
				const data = isJson && (await response.json());

				if (!response.ok) {
					const err = (data && data.message) || response.status;
					return Promise.reject(err);
				}

				alert("Successfuly updated volunteer.");
				
				update(true);

				navigation.navigate("Home");

			}).catch((error) => {
				console.log(error)
				alert("Error submitting changes. Try again later.")
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
								Edit Profile
							</Text>
						</View>
						<View style={infoStyles.inputField} backgroundColor={editFirst ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									value={firstName}
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setFirstName(text)}
									editable={editFirst}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditFirst(true);
								}}>
								<Ionicons name="pencil" size={25} color={editFirst ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
						<View style={infoStyles.inputField} backgroundColor={editLast ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									value={lastName}
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setLastName(text)}
									editable={editLast}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditLast(true);
								}}>
								<Ionicons name="pencil" size={25} color={editLast ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
						
						<View style={infoStyles.inputField} backgroundColor={editPronouns ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									value={pronouns}
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setPronouns(text)}
									editable={editPronouns}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditPronouns(true);
								}}>
								<Ionicons name="pencil" size={25} color={editPronouns ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
						
						<View style={infoStyles.inputField} backgroundColor={editBackground ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									value={background}
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setBackground(text)}
									editable={editBackground}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditBackground(true);
								}}>
								<Ionicons
									name="pencil"
									size={25}
									color={editBackground ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
						
						<View style={infoStyles.inputField} backgroundColor={editPhoneNum ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									value={phoneNum.toString()}
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setPhoneNum(parseInt(text))}
									editable={editPhoneNum}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditPhoneNum(true);
								}}>
								<Ionicons name="pencil" size={25} color={editPhoneNum ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
						
						<SelectList
							setSelected={val => setSelectedBurrough(val)}
							data={burrough}
							save="value"
							placeholder={selectedBurrough}
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
							placeholder={selectedGender}
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

export default EditVolunteerProfile;
