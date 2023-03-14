import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import resourceStyles from './ResourceStyles';
import ResourceInfo from './ResourceInfo';

const Resource = () => {
	return (
		<View style={resourceStyles.resourceCard}>
			<View style={resourceStyles.topTitleContainer}>
				<Text style={resourceStyles.resourceName}>Planet Fitness</Text>
				<Text style={resourceStyles.resourceType}>Available Showers</Text>
			</View>
			<View style={resourceStyles.bottomInfoContainer}>
				<ResourceInfo icon="search" info="www.planetfitness.com/hours"/>
				<ResourceInfo icon="person-outline" info="Betsy Charles"/>
				<ResourceInfo icon="call-outline" info="+1 493.223.4329"/>
			</View>
		</View>
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

export default Resource;
