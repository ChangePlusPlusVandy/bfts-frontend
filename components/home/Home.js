import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../main/Main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from '../community/Community';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'home'
          } else if (route.name === 'Community') {
            iconName = 'information-circle'
          }
          return <Ionicons name={iconName} size={size} color={color} />;

        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Main" component={Main} options={{ headerShown:  false }}/>
        <Tab.Screen name="Community" component={Community} options={{headerShown: false}}/>
    </Tab.Navigator>
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

export default Home;