import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import profileStyles from './ProfileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileCard from './ProfileCard';

const profiles = [
	{
		name: 'John Doe',
		pronouns: 'He/Him/His',
		location: 'Queens',
		livingSituation: 'Unstable, being attacked while sleeping',
	},
	{
		name: 'Jane Doe',
		pronouns: 'She/Her/Hers',
		location: 'Manhattan',
		livingSituation: 'Unstable, being attacked while sleeping',
	},
	{
		name: 'Jane Doe',
		pronouns: 'She/Her/Hers',
		location: 'Manhattan',
		livingSituation: 'Unstable, being attacked while sleeping',
	},
	{
		name: 'Jane Doe',
		pronouns: 'She/Her/Hers',
		location: 'Manhattan',
		livingSituation: 'Unstable, being attacked while sleeping',
	},
];

const Profile = () => {
	return (
		<View style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', padding: 10, flex: 1 }}>
			{/* <View style={{alignContent: 'center', alignItems: 'center'}}>
				<Ionicons name="person-outline" size={50} color="black" />
			</View> */}
			<View style={profileStyles.profileContainer}>
				<Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: 27 }}>Shivam Vohra</Text>
				<Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 17 }}>Volunteer</Text>
			</View>
			<View
				style={{
					width: '100%',
					marginTop: 15,
					flexDirection: 'row',
					alignContent: 'space-between',
					justifyContent: 'center',
				}}>
				<TouchableOpacity style={[profileStyles.editProfileBtn, { marginRight: 5 }]}>
					<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black' }}>Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[profileStyles.editProfileBtn, { marginLeft: 5 }]}>
					<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black' }}>Add Client</Text>
				</TouchableOpacity>
			</View>

			<View style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>
				<View style={profileStyles.clientHeader}>
					<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black', fontSize: '20', padding: 7 }}>
						Clients
					</Text>
				</View>
				<ScrollView style={{ width: '100%', height: '67%' }}>
					{profiles.map((profile, id) => (
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
