import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../community/Community';
import AddClient from '../addClient/AddClient';
import Header from '../header/Header';
import { BFTS_BLUE } from '../../constants';
import Profile from '../profile/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResourceDisplay from '../resources/ResourceDisplay';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNav = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Resources"
				component={ResourceDisplay}
				options={{
					headerTitle: () => <Header name="main" />,
					headerLeft: () => (
						<View>
							<TouchableOpacity
								style={{ marginLeft: 5 }}
								onPress={() => navigation.navigate('Community')}>
								<Ionicons name="images-outline" size={25} color={BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="Community"
				component={Community}
				options={{
					headerTitle: () => <Header name="community" />,
					headerLeft: () => (
						<View>
							<TouchableOpacity
								style={{ marginLeft: 5 }}
								onPress={() => navigation.navigate('Resources')}>
								<Ionicons name="chevron-back-outline" size={25} color={BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
					),
				}}
			/>
			
		</Stack.Navigator>
	);
};

const ProfileNav = ({ navigation }) => {
	const headerTitle = <Header />;

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile1"
				component={Profile}
				options={{
					headerTitle: () => headerTitle,
					headerLeft: () => (
						<View>
							<TouchableOpacity
								style={{ marginLeft: 5 }}
								onPress={() => navigation.navigate('Community')}>
								<Ionicons name="images-outline" size={25} color={BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="Community"
				component={Community}
				options={{
					headerTitle: () => headerTitle,
					headerLeft: () => (
						<View>
							<TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.navigate('Profile1')}>
								<Ionicons name="chevron-back-outline" size={25} color={BFTS_BLUE}></Ionicons>
							</TouchableOpacity>
						</View>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

const Home = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					var icon = require('../../assets/person.png');
					let viewStyle, imgStyle;

					if (route.name === 'Main') {
						icon = require('../../assets/house.png');
					} else if (route.name === 'Profile') {
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
				tabBarActiveTintColor: { BFTS_BLUE },
				tabBarInactiveTintColor: 'gray',
				tabBarShowLabel: false,
			})}>
			<Tab.Screen
				name="Main"
				component={MainNav}
				options={{
					headerShown: false,
				}}
			/>
			<Tab.Screen name="Plus" component={Community} options={{ headerShown: false }} />
			<Tab.Screen
				name="Profile"
				component={ProfileNav}
				options={{
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

export default Home;
