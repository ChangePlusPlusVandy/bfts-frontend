import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        borderRadius: 10,
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
    },
    textInput: {
        height: 50,
        margin: 1,
        flex: 1,
        padding: 10,
        borderRadius: 5,
    },
    textClicks: {
        height: 30,
        marginBottom: 30,
        alignItems: "center",
    },
    forgotBtn: {
        marginBottom: 10,
    },
    selectDropdown:{
        marginBottom: 10,
        height: 30,
        backgroundColor: "#89CFF0",
        alignItems: "center",

    },
    submitBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#89CFF0",
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
    submitText: {
        fontSize: 20,
    },
    linksText: {
        textDecorationLine: 'underline',
        fontSize: 15,
    }
})