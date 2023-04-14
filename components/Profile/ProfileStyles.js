import { StyleSheet } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';

const profileStyles = StyleSheet.create({
	profileContainer: {
		backgroundColor: 'white',
		padding: 20,
		alignContent: 'center',
		alignItems: 'center',
	},
	editProfileBtn: {
		backgroundColor: BFTS_WHITE,
		borderRadius: 5,
		width: '45%',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderColor: BFTS_BLUE,
		borderWidth: 1,
		marginTop: 5,
	},
	addClientBtn: {
		backgroundColor: BFTS_BLUE,
		borderRadius: 10,
		width: '85%',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderColor: BFTS_BLUE,
		borderWidth: 2,
	},
	clientHeader: {
		marginTop: 10,
		width: '150%',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'gray',
	},
});

export default profileStyles;
