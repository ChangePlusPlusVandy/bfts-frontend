import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import resourceStyles from './ResourceStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResourceInfo = ({ icon, info, clickable }) => {

	// const makePhoneCall = () => {
	// 	console.log("Pressed");
	// 	if (typeof info === 'number' && info.toString().length == 10) {
	// 		let phoneNum = '(' +
	// 					  ((info / 10 ** 7) | 0) +
	// 					  ') ' +
	// 					  (((info % 10 ** 7) / 10 ** 4) | 0) +
	// 					  '-' +
	// 					  (info % 10 ** 4);
	// 		Linking.openURL(`tel:${phoneNum}`);
	// 	}
	// }

	return (
		<View style={resourceStyles.singularInfoContainer}>
			<Ionicons
				name={icon}
				size={12}
				color="blue"
				style={{ paddingRight: 10, paddingBottom: 10, paddingTop: 2 }}
			/>
			<TouchableOpacity disabled={!clickable}>
				<Text style={{ fontFamily: 'Montserrat_500Medium', color: 'black' }}>
					{typeof info === 'number' && info.toString().length == 10
						? // format as a phone number
						  '(' +
						  ((info / 10 ** 7) | 0) +
						  ') ' +
						  (((info % 10 ** 7) / 10 ** 4) | 0) +
						  '-' +
						  (info % 10 ** 4)
						: info}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ResourceInfo;
