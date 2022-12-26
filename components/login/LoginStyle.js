import { StyleSheet } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BFTS_WHITE,
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtn: {
        width: 250,
        height: 75,
        backgroundColor: BFTS_BLUE,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
    },
    errorText: {
        color: "red",
        marginTop: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:20,
    },
    loginText: {
        fontSize: 20,
        //fontFamily: "Montserrat_900Bold", TODO: Get this font working
        color: BFTS_WHITE,
        fontWeight: 'bold'
    },
    linksText: {
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 150
    },
    inputField: {
        flexDirection: 'row',
        width: 315,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        marginBottom: 7
    }
});

export default loginStyles;