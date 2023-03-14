import { StyleSheet } from 'react-native';

const resourceStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%'
    },
    resourceCard: {
        padding: 20,
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: "100%"
    },
    topTitleContainer: {
        width: "100%",
        paddingBottom: 20,
        alignContent: 'center'
    },
    resourceName: {
        fontWeight: 'bold',
        fontSize: 25
    },
    resourceType: {
        fontSize: 15,
        color: 'gray'
    },
    bottomInfoContainer: {
        justifyContent: 'center',
        width: "100%"
    },
    singularInfoContainer: {
        flexDirection: 'row'
    }
})


export default resourceStyles;