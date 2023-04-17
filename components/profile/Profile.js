import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import profileStyles from './ProfileStyles';
import AddClient from '../addClient/AddClient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditVolunteerProfile from './EditVolunteerProfile';
import { useNavigation } from '@react-navigation/native';
import ProfileCard from './ProfileCard';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase';


const Profile = () => {
	const navigation = useNavigation();

	const [clients, setClients] = useState([]);
	const [token, setToken] = useState(null);
	const [id, setId] = useState("");
	const [volunteer, setVolunteer] = useState({});

	const [change, setChange] = useState(false);


	const getToken = async () => {
		const token = auth.onAuthStateChanged((user) => {
			if (user) {
				user.getIdToken().then((tok) => { setToken(tok); setId(user.uid); return tok;});
			}
		});
		return await token;
	}

	getToken();


	const requestOptions = {
		method: "GET",
		headers: {"Content-Type": "application/json", "bearer": token}
	}
	
	const fetchClients = () => {
		fetch("https://bfts-backend.herokuapp.com/clients/getAll", requestOptions).then(async (response) => {
			const isJson = response.headers.get("content-type")?.includes("application/json");
			const data = isJson && (await response.json());

			if (!response.ok) {
				const err = (data && data.message) || response.status;
				return Promise.reject(err);
			}
			
			setClients(data);
		}).catch((error) => {
			console.log(error);
		})
	}

	const getVolunteerInfo = () => {
		fetch(`https://bfts-backend.herokuapp.com/volunteers/getById/${id}`, requestOptions).then(async (response) => {
			const isJson = response.headers.get("content-type")?.includes("application/json");
			const data = isJson && (await response.json());

			if (!response.ok) {
				const err = (data && data.message) || response.status;
				return Promise.reject(err);
			}
			setVolunteer(data);
		}).catch((error) => {
			console.log(error);
		})
	}

	useEffect(fetchClients, [token, change]);
	useEffect(getVolunteerInfo, [id, change]);

	return (
		<View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', padding: 10, flex: 1 }}>
			{/* <View style={{alignContent: 'center', alignItems: 'center'}}>
				<Ionicons name="person-outline" size={50} color="black" />
			</View> */}
			<View style={profileStyles.profileContainer}>
				<Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: 27 }}>{volunteer.name}</Text>
				<Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 17 }}>Volunteer</Text>
				<TouchableOpacity onPress={() => navigation.navigate("EditVolProfile")} style={[profileStyles.editProfileBtn, { marginRight: 5 }]}>
					<Text style={{ fontFamily: 'Montserrat_400Regular', color: BFTS_BLUE, fontSize: 14 }}>
						Edit Profile
					</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					width: '100%',
					marginTop: 5,
					flexDirection: 'row',
					alignContent: 'space-between',
					justifyContent: 'center',
					height: '8%',
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate('AddClient')}
					style={[profileStyles.editProfileBtn, { marginLeft: 5 }]}>
					<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black' }}>Add Client</Text>
				</TouchableOpacity>
			</View>

			<View style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>
				<View style={profileStyles.clientHeader}>
					<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black', fontSize: '20', padding: 7 }}>
						Clients
					</Text>
					<TouchableOpacity style={profileStyles.refreshButton} onPress={() => setChange(!change)}>
						<View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center', paddingTop: 3}}>
							<Ionicons name="refresh" size={15} color="white" />
						</View>
					</TouchableOpacity>
				</View>
				<ScrollView style={{ width: '100%', height: '67%' }}>
					{clients.map((profile, id) => (
						<View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
							<ProfileCard key={id} profile={profile} />
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
};

export default Profile;
