import { View, Text } from "react-native";
import cardStyles from "./ProfileCardStyles";

export default function ProfileCard({ profile }) {
    return (
        <View style={cardStyles.main}>
            <View style={cardStyles.nameView}>
                <Text>
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>{profile.name}</Text>
                    <Text style={{color: 'black', fontWeight: '200', fontSize: 15}}>  {profile.pronouns}</Text>
                </Text>
            </View>
            <View style={{marginLeft:20, marginBottom: 40, marginRight:20}}>
                <Text>{profile.location}</Text>
                <Text>{profile.livingSituation}</Text>
            </View>
        </View>
    );
}
