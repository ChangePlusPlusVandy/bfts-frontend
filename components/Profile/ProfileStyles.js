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
		borderWidth: 2,
	},
	clientHeader: {
		marginTop: 50,
		width: '150%',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderColor: 'gray',
	},
});

export default profileStyles;
