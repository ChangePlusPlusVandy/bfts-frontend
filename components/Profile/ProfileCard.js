import { View, Text } from 'react-native';
import cardStyles from './ProfileCardStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileCard({ profile }) {
	return (
		<TouchableOpacity style={cardStyles.main} onPress={()=>{}}>
			<View>
				<View style={cardStyles.nameView}>
					<Text>
						<Text style={{ fontFamily: 'Montserrat_700Bold', color: 'black', fontSize: 20 }}>{profile.name}</Text>
						<Text> </Text>
						<Text style={{ fontFamily: 'Montserrat_400Regular', color: 'black', fontWeight: '200', fontSize: 15 }}> {profile.pronouns}</Text>
					</Text>
				</View>
				
				<View style={{ marginLeft: 20, marginRight: 20 , marginBottom: 10}}>
					<Text style={{fontFamily: 'Montserrat_400Regular'}}>{profile.location}</Text>
				</View>
				<View style={{marginLeft: 20, marginRight: 20, marginBottom: 40}}>
					<Text style={{fontFamily: 'Montserrat_400Regular' }}>{profile.livingSituation}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
