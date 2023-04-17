import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, RefreshControl } from 'react-native';
import Resource from './Resource';
import resourceStyles from './ResourceStyles';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { auth } from '../../firebase';

const ResourceDisplay = () => {
	const [data, setData] = useState([]);
	const [token, setToken] = useState(null);
	const [original, setOriginal] = useState([]);

	const [refreshing, setRefreshing] = useState(false);
	const [reloaded, setReloaded] = useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			setReloaded(!reloaded);
		}, 2000);
	}, []);

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

	const fetchResources = () => {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', bearer: token },
		};

		fetch('https://bfts-backend.herokuapp.com/resources/getAll', requestOptions)
			.then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && (await response.json());

				if (!response.ok) {
					const err = (data && data.message) || response.status;
					return Promise.reject(err);
				}

				console.log('Got resources');
				setData(data);
				setOriginal(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(fetchResources, [token, refreshing]);

	const navigation = useNavigation();

	return (
		<View>
			<View style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
				<Text style={{ fontSize: 30, fontFamily: 'Montserrat_500Medium' }}>Resources</Text>
			</View>
			<View
				style={{
					width: '100%',
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<TextInput
					placeholder="Search Resources"
					style={{
						width: '80%',
						height: 10,
						padding: 20,
						borderColor: 'gray',
						borderRadius: 4,
						borderWidth: 1,
						marginTop: 9,
						color: 'black',
						marginRight: '5%',
					}}
					onChangeText={text => {
						const filtered = data.filter(item => {
							for (const key in item) {
								if (typeof item[key] === 'string' && item[key].includes(text)) {
									return true;
								}
							}
							return false;
						});

						console.log(filtered);

						if (text.length == -0) {
							setData(original);
						} else {
							setData(filtered);
						}
					}}
				/>
				<TouchableOpacity
					style={resourceStyles.addButton}
					onPress={() => navigation.navigate('CreateResource')}>
					<View
						style={{
							alignContent: 'center',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100%',
							paddingLeft: 3,
						}}>
						<Ionicons name="add" size={25} color="white" />
					</View>
				</TouchableOpacity>
			</View>
			<View></View>
			<ScrollView
				style={resourceStyles.container}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				{data.map((r, id) => (
					<Resource resource={r} key={id} />
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ResourceDisplay;
