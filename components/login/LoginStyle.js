import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputView: {
		borderRadius: 10,
		borderWidth: 1,
		width: '70%',
		height: 45,
		marginBottom: 20,
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
	},
	textClicks: {
		height: 30,
		marginBottom: 30,
		alignItems: 'center',
	},
	forgotBtn: {
		marginBottom: 10,
	},
	loginBtn: {
		width: '80%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#2874fc',
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
	},
	loginText: {
		fontSize: 20,
		textDecorationLine: 'underline',
	},
	linksText: {
		textDecorationLine: 'underline',
		fontSize: 15,
	},
});
