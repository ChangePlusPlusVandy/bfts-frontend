import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../main/Main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../community/Community';
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
					}
					else if (route.name === 'Plus') {
						icon = require('../../assets/plus.png');
						viewStyle={
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
				tabBarActiveTintColor: 'blue',
				tabBarInactiveTintColor: 'gray',
				tabBarShowLabel: false,

			})}>
			<Tab.Screen name="Main" component={Main} options={{ headerShown: false }} />
			<Tab.Screen name="Plus" component={Community} options={{ headerShown: false }} />
			<Tab.Screen name="Community" component={Community} options={{ headerShown: false }} />
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
