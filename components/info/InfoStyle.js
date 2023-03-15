import { StyleSheet } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import { useFonts, Montserrat_100Thin } from '@expo-google-fonts/montserrat';




const infoStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BFTS_WHITE,
		alignItems: 'center',
		justifyContent: 'center',
	},
    
	submitBtn: {
		width: 225,
		height: 55,
		backgroundColor: BFTS_BLUE,
		borderRadius: 15,
		alignItems: 'center',
        fontFamily: 'Montserrat_100Thin',
		justifyContent: 'center',
		marginTop: 35,
	},
	errorText: {
		color: 'red',
		marginTop: 10,
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 20,
		alignContent: 'center',
		justifyContent: 'center'
	},
	infoText: {
		fontSize: 20,
		//fontFamily: "Montserrat_900Bold", TODO: Get this font working
		color: BFTS_WHITE,
		fontWeight: 'bold',
	},
	linksText: {
		textDecorationLine: 'underline',
		fontSize: 15,
	},
	logo: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		marginBottom: 150,
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
	},
	selectList: {
		flexDirection: 'row',
		width: 325,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 15,
		padding: 10,
        backgroundColor: BFTS_WHITE,
		marginBottom: 7,
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		
	},

	
});

export default infoStyles;
