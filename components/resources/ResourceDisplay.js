import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Resource from './Resource';
import resourceStyles from './ResourceStyles';

const ResourceDisplay = () => {
	return (
		<ScrollView style={resourceStyles.container}>
			<Resource />
            <Resource />
            <Resource />
            <Resource />
		</ScrollView>
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

export default ResourceDisplay;
