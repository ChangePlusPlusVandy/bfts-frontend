import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../main/Main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../community/Community';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import { BFTS_BLUE } from '../../constants';
import Landing from '../landing/Landing';

const Tab = createBottomTabNavigator();

const Home = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					var icon = require('../../assets/person.png');
					let viewStyle, imgStyle;

					if (route.name === 'Main') {
						icon = require('../../assets/house.png');
					} else if (route.name === 'Community') {
						icon = require('../../assets/person.png');
					} else if (route.name === 'Plus') {
						icon = require('../../assets/plus.png');
						viewStyle = {
							position: 'absolute',
							bottom: 0, // space from bottombar
							height: 40,
							width: 40,
							borderRadius: 40,
							justifyContent: 'center',
							alignItems: 'center',
						};
						imgStyle = {
							width: 70,
							height: 70,
							alignContent: 'center',
						};
					}
					return (
						<View style={viewStyle}>
							<Image source={icon} size={size} color={color} tintColor={color} style={imgStyle} />
						</View>
					);
				},
				tabBarActiveTintColor: {BFTS_BLUE},
				tabBarInactiveTintColor: 'gray',
				tabBarShowLabel: false,
			})}>
			<Tab.Screen name="Main" component={Main} options={{ 
				headerTitle: () => <Header name="main"/>,
				headerLeft: () => 
					<View>
						<TouchableOpacity style={{marginLeft: 15}}>
							<Ionicons name="images-outline" size={25} color={BFTS_BLUE}></Ionicons>
						</TouchableOpacity>
					</View>
				
			}} />
			<Tab.Screen name="Community" component={Community} options={{ 
				headerTitle: () => <Header name="community"/>,
				headerLeft: () => 
					<View>
						<TouchableOpacity style={{marginLeft: 15}}>
							<Ionicons name="chevron-back-outline" size={25} color={BFTS_BLUE}></Ionicons>
						</TouchableOpacity>
					</View>
			}} />
		</Tab.Navigator>
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

export default Home;
