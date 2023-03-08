import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../main/Main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../community/Community';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import { BFTS_BLUE } from '../../constants';

const Tab = createBottomTabNavigator();

const Home = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Main') {
						iconName = 'home';
					} else if (route.name === 'Community') {
						iconName = 'information-circle';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: {BFTS_BLUE},
				tabBarInactiveTintColor: 'gray',
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
