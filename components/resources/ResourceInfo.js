import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import resourceStyles from './ResourceStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ResourceInfo = ({icon, info}) => {

    return (
        <View style={resourceStyles.singularInfoContainer}>
            <Ionicons name={icon} size={12} color="blue" style={{paddingRight: 10, paddingBottom: 10, paddingTop: 2}} />
            <Text style={{fontFamily: "Montserrat_500Medium", color: 'black'}}>{info}</Text>
        </View>
    );

}

export default ResourceInfo;