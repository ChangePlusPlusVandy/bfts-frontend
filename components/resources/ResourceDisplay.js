import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Resource from './Resource';
import resourceStyles from './ResourceStyles';

const resourceData = [
	{
		title: 'Planet Fitness',
		category: 'Available Showers',
		website: 'www.planetfitness.com/hours',
		contactName: 'Becky Charles',
		contactNumber: 4044218726,
	},
	{
		title: 'Planet Fitness',
		category: 'Available Showers',
		website: 'www.planetfitness.com/hours',
		contactName: 'Becky Charles',
		contactNumber: 4044218726,
	},
	{
		title: 'Planet Fitness',
		category: 'Available Showers',
		website: 'www.planetfitness.com/hours',
		contactName: 'Becky Charles',
		contactNumber: 4044218726,
	},
	{
		title: 'Planet Fitness',
		category: 'Available Showers',
		website: 'www.planetfitness.com/hours',
		contactName: 'Becky Charles',
		contactNumber: 4044218726,
	},
];

const ResourceDisplay = () => {
	return (
		<ScrollView style={resourceStyles.container}>
			{resourceData.map((r, id) => (
				<Resource resource={r} key={id} />
			))}
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
