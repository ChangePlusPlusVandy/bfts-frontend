import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
	main: {
		backgroundColor: 'white',
		borderRadius: 20,
		borderColor: 'blue',
		width: '80%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
		marginBottom: 10,
	},
	nameView: { flexDirection: 'row', marginLeft: 20, marginTop: 25, marginRight: 15 },
});

export default cardStyles;
