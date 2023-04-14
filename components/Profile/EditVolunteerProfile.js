import React, { useState, Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';
import { BFTS_WHITE } from '../../constants';
import infoStyles from '../info/InfoStyle';

const EditVolunteerProfile = () => {
	const [race, setRace] = useState(null);
	const [background, setBackground] = useState(null);
	const [phoneNum, setPhoneNum] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [livingSit, setLivingSit] = useState(null);
	const [selectedBurrough, setSelectedBurrough] = useState(null);
	const [selectedGender, setSelectedGender] = useState(null);

	const [editRace, setEditRace] = useState(false);
	const [editBackground, setEditBackground] = useState(false);
	const [editPhoneNum, setEditPhoneNum] = useState(false);
	const [editFirst, setEditFirst] = useState(false);
	const [editLast, setEditLast] = useState(false);
	const [edtLivingSit, setEditLivingSit] = useState(false);
	const [editSelectedBurrough, setEditSelectedBurrough] = useState(false);
	const [editelectedGender, setEditSelectedGender] = useState(false);

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
			phoneNum === null ||
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
			// Calling fetch
			navigation.navigate('Home');
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
									placeholder="First Name"
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
									placeholder="Last Name"
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

						<View style={infoStyles.inputField} backgroundColor={editRace ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									placeholder="Race"
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setRace(text)}
									editable={editRace}
								/>
							</View>
							<TouchableOpacity
								style={[{ paddingRight: 10 }]}
								onPress={() => {
									setEditRace(true);
								}}>
								<Ionicons name="pencil" size={25} color={editRace ? 'grey' : BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>

						<View style={infoStyles.inputField} backgroundColor={editBackground ? BFTS_WHITE : 'lightgrey'}>
							<View style={{ width: '85%' }}>
								<TextInput
									placeholder="Background"
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setBackgroundName(text)}
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
									placeholder="Phone Number"
									style={{ padding: 8, width: 270 }}
									onChangeText={text => setEditPhoneNum(text)}
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

export default EditVolunteerProfile;
