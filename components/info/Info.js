import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'
import infoStyles from './InfoStyle';


export default function Info() {
	const [gender, setGender] = useState('');
	const [race, setRace] = useState('');
	const [birthday, setBirthday] = useState('');
	const [background, setBackground] = useState('');
	const [phoneNum, setPhoneNum] = useState('');
	const [location, setLocation] = useState('');
	const [selected, setSelected] = React.useState("");

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	// const data = [
	// 	{key:'1', value:'Mobiles', disabled:true},
	// 	{key:'2', value:'Appliances'},
	// 	{key:'3', value:'Cameras'},
	// 	{key:'4', value:'Computers', disabled:true},
	// 	{key:'5', value:'Vegetables'},
	// 	{key:'6', value:'Diary Products'},
	// 	{key:'7', value:'Drinks'},
	// ]

	const handleSubmit = async e => {
		console.log("Submitting");
		if (gender.length === 0 || race.length === 0 || birthday.length === 0 || background.length === 0 || phoneNum.length === 0 || location.length === 0) {
			alert("Please fill out all fields.");
			return;
		}

		try {
			// Calling fetch
			navigation.navigate("Home")
		} catch (error) {
			alert("Failed to submit information.");
		}
	};

  
	
	return (

		<KeyboardAvoidingView style={infoStyles.container} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 75 }}>
					<View style = {infoStyles.header}>
						<Text
							style={{ padding: 10, width: 400, fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
							Please Input Your Information
						</Text>
					</View>
					<View style={infoStyles.inputField}>
						<TextInput
							placeholder="Gender"
							style={{ padding: 8, width: 270 }}
							onChangeText={text => setGender(text)}
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
							placeholder="Birthday"
							style={{ padding: 8, width: 270 }}
							onChangeText={text => setBirthday(text)}
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
					
					{/* <SelectList 
						setSelected={(val) => setSelected(val)} 
						data={data} 
						save="value"
					/> */}

					<TouchableOpacity style={infoStyles.submitBtn} onPress={() => handleSubmit()}>
						<Text style={infoStyles.infoText}>Submit</Text>
					</TouchableOpacity>
					
					<View style={{ flex: 1 }} />

					

				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	
	);
}
