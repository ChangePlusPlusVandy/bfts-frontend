import { React } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import postTextStyles from './PostTextStyles';
import { auth } from '../../firebase';
import { useEffect } from 'react';

import Moment from 'moment';

const CreatePost = () => {
	const today = new Moment();

	const day = today.format('M/DD/YY');
	const time = today.format('h:mm a');

	const [text, setText] = useState('');
	const [token, setToken] = useState(null);
	const [id, setId] = useState(null);
	const [email, setEmail] = useState(null);

	auth.onAuthStateChanged(user => {
		if (user) {
			console.log('Getting token');
			user.getIdToken().then(tok => {
				setToken(tok);
				setId(user.uid);
				setEmail(user.email);
			});
		}
	});

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', bearer: token },
		body: JSON.stringify({
			poster: id,
			text: text,
			name: email,
		}),
	};

	console.log(requestOptions);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			width: '100%',
			paddingTop: 50,
		},
	});

	const handleSubmit = () => {
		if (text === null) {
			alert('Please fill out all field.');
		} else {
			fetch('https://bfts-backend.herokuapp.com/posts/create', requestOptions)
				.then(async response => {
					const isJson = response.headers.get('content-type')?.includes('application/json');
					const data = isJson && (await response.json());

					if (!response.ok) {
						const err = (data && data.message) || response.status;
						return Promise.reject(err);
					}

					alert('Successfully created post.');
				})
				.catch(error => {
					console.log(error);
					alert('Failed to submit post. Try again later.');
				});
		}
	};

	const PostHeader = () => (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{/* <Image source={{ uri: post.profile_picture }} style={styles.profile_pic} /> */}
				<Ionicons name="person-outline" size={30} color="blue" style={{ marginLeft: 11, marginTop: 2 }} />
				<Text style={{ color: 'black', marginLeft: 5, fontWeight: '600' }}> {email} </Text>
			</View>
		</View>
	);

	return (
		<ScrollView style={styles.container}>
				<StatusBar />
				<View
					style={{
						backgroundColor: 'white',
						alignItems: 'center',
						paddingTop: 10,
						paddingBottom: 5,
						marginTop: 12,
						marginBottom: 12,
					}}>
					<Text style={{ fontSize: 30, fontFamily: 'Montserrat_500Medium' }}>Create a Post</Text>
				</View>
				<PostHeader />
				<View></View>
				<View style={{ width: '100%', height: 150, width: '100%', paddingLeft: 10 }}>
					<TextInput
						placeholder="What's happening?"
						multiline={true}
						onChangeText={txt => {
							setText(txt);
						}}
						style={{ marginLeft: 15 }}>
						{text}
					</TextInput>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
						<View style={postTextStyles.timeView}>
							<Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{time + ' - '}</Text>
							<Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{day}</Text>
						</View>
					</View>
					<View style={{alignContent: 'center', height: "100%", alignItems: 'center', width: "100%", marginTop: 30, zIndex: 1}}>
						<TouchableOpacity
							style={{
								width: '50%',
								height: '30%',
								backgroundColor: BFTS_BLUE,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={() => handleSubmit()}>
							<Text
								style={{
									fontSize: 15,
									color: BFTS_WHITE,
									fontWeight: 'bold',
									fontFamily: 'Montserrat_700Bold',
								}}>
								Post
							</Text>
						</TouchableOpacity>
					</View>
				</View>
		</ScrollView>
	);
};

export default CreatePost;
