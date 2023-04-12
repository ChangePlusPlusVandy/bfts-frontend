import { StyleSheet } from "react-native";

const postTextStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 1,
        marginLeft: 15,
        marginTop: 5,
        height: '100%'
    },
    post: {
        fontSize: 19,
        fontWeight: "450"
    },
    timeView: {
        marginTop: 20,
        alignContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 15,
        padding: 1
    }
});


export default postTextStyles;