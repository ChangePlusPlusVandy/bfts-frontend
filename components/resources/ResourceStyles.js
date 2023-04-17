import { StyleSheet } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';

const resourceStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',
		height: '87%'
	},
	inputContainer: {
		flex: 1,
		backgroundColor: BFTS_WHITE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	resourceCard: {
		padding: 20,
		borderBottomWidth: 2,
		borderColor: 'gray',
		width: '100%',
	},
	topTitleContainer: {
		width: '100%',
		paddingBottom: 20,
		alignContent: 'center',
	},
	resourceName: {
		fontWeight: 'bold',
		fontSize: 25,
	},
	resourceType: {
		fontSize: 15,
		color: 'gray',
	},
	bottomInfoContainer: {
		justifyContent: 'center',
		width: '100%',
	},
	singularInfoContainer: {
		flexDirection: 'row',
	},
	addButton: {
		backgroundColor: BFTS_BLUE,
		width: 30,
		height: 30,
		marginLeft: "2%",
		marginTop: 5,
		borderRadius: 15,
	},
	inputField: {
		flexDirection: 'row',
		width: 325,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 15,
		padding: 10,
		backgroundColor: '#F2F2F2',
		marginBottom: 15,
		borderWidth: 1,
		borderColor: 'black',
	},
});

export default resourceStyles;
