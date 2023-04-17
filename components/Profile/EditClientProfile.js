import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import EditField from './EditField';
import { useState } from 'react';
import { auth } from '../../firebase';

export default function EditClientProfile({navigation, route}) {
	const [sumbitted, setSubmittedValue] = useState(false);


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

	const currClient = route.params.client;
	const name = currClient.name

	const fName = name.substring(0, name.indexOf(' '));
	const lName = name.substring(name.indexOf(' ')+1);

	const [firstName, setFirstName] = useState(fName);
	const [lastName, setLastName] = useState(lName);
	const [location, setLocation] = useState(currClient.location);
	const [pronouns, setPronouns] = useState(currClient.pronouns);
	const [livingSituation, setLivingSituation] = useState(currClient.livingSituation);
	const [background, setBackground] = useState(currClient.background);
	console.log(currClient)


	const handleSubmit = () => {
		// Fetch here --> should be a PUT
		const requestOptions = {
			method: 'PATCH',
			headers: { "Content-Type": "application/json", "bearer": token },
			body: JSON.stringify({
				clientId: currClient._id,
				livingSituation: livingSituation,
				background: background,
				name: firstName + " " + lastName,
				pronouns: pronouns,
				location: location
			})
		}

		console.log("Submitting changes");

		fetch("https://bfts-backend.herokuapp.com/clients/updateById", requestOptions).then(async (response) => {
			const isJson = response.headers.get("content-type")?.includes("application/json");
			const data = isJson && (await response.json());

			if (!response.ok) {
				const err = (data && data.message) || response.status;
				return Promise.reject(err);
			}

			alert("Successfuly updated client.");
		}).catch((error) => {
			alert("Error submitting changes. Try again later.")
		})
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: { BFTS_WHITE } }}>
			<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
				<Text
					style={[
						{  fontSize: 30, fontFamily: 'Montserrat_500Medium' },
					]}>
					Edit Client Profile
				</Text>
			</View>
			<ScrollView>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<EditField val={fName} submitted={sumbitted} setter={setFirstName} />
					<EditField val={lName} submitted={sumbitted} setter={setLastName} />
					<EditField val={currClient.location} submitted={sumbitted} setter={setLocation} />
					<EditField val={currClient.pronouns} submitted={sumbitted} setter={setPronouns} />
					<EditField val={currClient.livingSituation} submitted={sumbitted} multiline={true} setter={setLivingSituation} />
					<EditField val={currClient.background} submitted={sumbitted} multiline={true} setter={setBackground} />
				</View>
			</ScrollView>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
					justifyContent: 'flex-end',
					marginBottom: '8%',
				}}>
				<TouchableOpacity
					style={{
						width: '65%',
						height: 45,
						backgroundColor: BFTS_BLUE,
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 15,
					}}
					onPress={() => handleSubmit()}>
					<Text
						style={[
							{ fontSize: 18, color: BFTS_WHITE },
							{ fontFamily: 'Montserrat_700Bold' },
						]}>
						Submit Changes
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
