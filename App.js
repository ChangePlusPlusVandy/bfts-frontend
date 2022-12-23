import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          title="Login"
          component={Login}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          title="Register"
          component={Register}
          options={{headerShown: true, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          title="Home"
          component={Home}
          options={{headerShown: false, gestureEnabled: false}}
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
