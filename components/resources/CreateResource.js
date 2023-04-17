import { StyleSheet, Text, View, TextInput, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import resourceStyles from './ResourceStyles';
import { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BFTS_BLUE } from '../../constants';
import { auth } from '../../firebase';

const CreateResource = () => {
	const [token, setToken] = useState(null);

	const getToken = async () => {
		const token = auth.onAuthStateChanged(user => {
			if (user) {
				user.getIdToken().then(tok => {
					setToken(tok);
					return tok;
				});
			}
		});
		return await token;
	};

	getToken();

	const [title, setTitle] = useState(null);
	const [category, setCategory] = useState(null);
	const [website, setWebsite] = useState(null);
	const [contact, setContact] = useState(null);
	const [phone, setPhone] = useState(null);

	const handleSubmit = () => {
		if (title === null || category === null || website === null || contact === null || phone === null) {
			alert('Please fill out all field before submitting resource.');
		} else {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', bearer: token },
				body: JSON.stringify({
					title: title,
					category: category,
					website: website,
					contactName: contact,
					contactNumber: phone,
				}),
			};

			fetch('https://bfts-backend.herokuapp.com/resources/create', requestOptions)
				.then(async response => {
					const isJson = response.headers.get('content-type')?.includes('application/json');
					const data = isJson && (await response.json());

					if (!response.ok) {
						const err = (data && data.message) || response.status;
						return Promise.reject(err);
					}

					alert('Successfully created resource!');
				})
				.catch(error => {
					alert('Error in creating resource. Try again later.');
				});
		}
	};

	return (
		<KeyboardAvoidingView style={resourceStyles.inputContainer} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={{ marginTop: '20%', alignItems: 'center', padding: 5 }}>
						<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 30 }}>Create a Resource</Text>
					</View>

					<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, padding: 10 }}>
						<View style={resourceStyles.inputField}>
							<TextInput
								placeholder="Resource name"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setTitle(text)}
							/>
						</View>
						<View style={resourceStyles.inputField}>
							<TextInput
								placeholder="Resource category (i.e. Soup Kitchen)"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setCategory(text)}
							/>
						</View>
						<View style={resourceStyles.inputField}>
							<TextInput
								placeholder="Resource website (begin with www.)"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setWebsite(text)}
							/>
						</View>
						<View style={resourceStyles.inputField}>
							<TextInput
								placeholder="Address"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setContact(text)}
							/>
						</View>
						<View style={resourceStyles.inputField}>
							<TextInput
								placeholder="Phone Number"
								style={{ padding: 8, width: 270 }}
								onChangeText={text => setPhone(text)}
							/>
						</View>

						<TouchableOpacity
							onPress={() => handleSubmit()}
							style={{
								backgroundColor: BFTS_BLUE,
								width: 225,
								height: 65,
								borderRadius: 10,
								alignContent: 'center',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>
								Submit Resource
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default CreateResource;
