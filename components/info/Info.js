import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'
import infoStyles from './InfoStyle';

export default function Info() {
	const [race, setRace] = useState('');
	const [background, setBackground] = useState('');
	const [phoneNum, setPhoneNum] = useState('');
	const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [livingSit, setLivingSit] = useState('');
	const [selected, setSelected] = useState("");


    const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const burrough = [
		{key:'1', value:'Bronx'},
		{key:'2', value:'Brooklyn'},
		{key:'3', value:'Manhattan'},
		{key:'4', value:'Queens'},
		{key:'5', value:'Staten Island'},
	]
	const gender = [
		{key:'1', value:'Male'},
		{key:'2', value:'Female'},
		{key:'3', value:'Nonbinary'},
		{key:'4', value:'Other'},
	]

    const handleSubmit = async e => {
		console.log("Submitting");
		if (gender.length === 0 || race.length === 0 || background.length === 0 
            || phoneNum.length === 0 ||livingSit.length === 0 || firstName.length === 0 || lastName.length === 0 ) {
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
				<ScrollView>
					<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 75 }}>
						<View style = {infoStyles.header}>
							<Text
								style={{ padding: 10, width: 250, fontFamily: 'Tenor Sans', fontSize: 30, fontWeight: 'regular', textAlign: 'center' }}>
								Add a New Client
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
								placeholder="Living Situation"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setLivingSit(text)}
							/>
						</View>

						<SelectList 
							setSelected={(val) => setSelected(val)} 
							data={burrough} 
							save="value"
							boxStyles={{borderColor: '#F2F2F2' ,borderRadius:10, 
											width: 320, height: 47, backgroundColor: '#F2F2F2'}}
						/>

						<SelectList 
							setSelected={(val) => setSelected(val)} 
							data={gender} 
							save="value"
							boxStyles={{borderColor: '#F2F2F2' ,borderRadius:10, margin: 15,
											width: 320, height: 47, backgroundColor: '#F2F2F2'}}
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

}