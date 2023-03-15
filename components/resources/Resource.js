import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import resourceStyles from './ResourceStyles';
import ResourceInfo from './ResourceInfo';

const Resource = ({resource}) => {
	return (
		<View style={resourceStyles.resourceCard}>
			<View style={resourceStyles.topTitleContainer}>
				<Text style={resourceStyles.resourceName}>{resource.title}</Text>
				<Text style={resourceStyles.resourceType}>{resource.category}</Text>
			</View>
			<View style={resourceStyles.bottomInfoContainer}>
				<ResourceInfo icon="search" info={resource.website}/>
				<ResourceInfo icon="person-outline" info={resource.contactName}/>
				<ResourceInfo icon="call-outline" info={resource.contactNumber}/>
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
