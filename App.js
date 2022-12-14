import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Landing from './components/landing/Landing';
import { useFonts, Montserrat_900Black, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_700Bold,
		Montserrat_900Black,
	});

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="Landing" 
					title="Landing" 
					component={Landing} 
					options={{ headerShown: false, gestureEnabled: false }} 
				/>
				<Stack.Screen 
					name="Login" 
					title="Login" 
					component={Login} 
					options={{ headerShown: false, gestureEnabled: false  }} 
				/>
				<Stack.Screen
					name="Register"
					title="Register"
					component={Register}
					options={{ headerShown: false, gestureEnabled: false }}
				/>
				<Stack.Screen
					name="Home"
					title="Home"
					component={Home}
					options={{ headerShown: false, gestureEnabled: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
