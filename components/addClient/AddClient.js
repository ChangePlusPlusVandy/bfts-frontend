import React, { useState, Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Button, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'
import addClientStyles from './AddClientStyle';
import DatePicker from 'react-native-datepicker';


export default function AddClient() {
	const [race, setRace] = useState(null);
	const [birthday, setBirthday] = useState(null);
	const [background, setBackground] = useState(null);
	const [phoneNum, setPhoneNum] = useState(null);
	const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [livingSit, setLivingSit] = useState(null);
	const [selectedBurrough, setSelectedBurrough] = useState(null);
	const [selectedGender, setSelectedGender] = useState(null);



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
		if (gender === null || race=== null ||  background=== null
            || phoneNum=== null ||livingSit=== null || firstName=== null|| lastName=== null
			|| selectedBurrough ===null || selectedGender === null || birthday === null) {
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

		<KeyboardAvoidingView style={addClientStyles.container} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={{ justifyContent: 'flex-end', padding: 24, alignItems: 'center', marginTop: 75 }}>
						<View style = {addClientStyles.header}>
							<Text
								style={{ padding: 10, width: 400, fontFamily: 'Tenor Sans', fontSize: 33, fontWeight: 'regular', textAlign: 'center' }}>
								Volunteer Registration
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
								placeholder="Phone number"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setPhoneNum(text)}
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
							setSelected={(val) => setSelectedBurrough(val)} 
							data={burrough} 
							save="value"
							boxStyles={{borderColor: '#F2F2F2' ,borderRadius:10, 
											width: 320, height: 47, backgroundColor: '#F2F2F2'}}
						/>

						<SelectList 
							setSelected={(val) => setSelectedGender(val)} 
							data={gender} 
							save="value"
							boxStyles={{borderColor: '#F2F2F2' ,borderRadius:10, margin: 15,
											width: 320, height: 47, backgroundColor: '#F2F2F2'}}
						/>

						<DatePicker
							style={{ width: 340, borderRadius: 10, borderColor: 'white'}}
							date={birthday}
							mode="date"
							placeholder='Choose Birthday'
							format="YYYY-MM-DD"
							minDate="1900-05-01"
							maxDate="2023-04-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
							dateIcon: {
								width: 0
							},
							dateInput: {
								marginLeft: 10,
								backgroundColor: '#F2F2F2',
								borderRadius: 10,
								height: 45
							}
						
							}}
							onDateChange={(date) => setBirthday(date)}
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

}