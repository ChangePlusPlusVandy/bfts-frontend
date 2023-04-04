import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import EditField from './EditField';
import { useState } from 'react';


export default function EditClientProfile() {
	const [sumbitted, setSubmittedValue] = useState(false);

return (
<SafeAreaView style={{flex: 1, backgroundColor: {BFTS_WHITE}}}>
    <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 15,}}>
        <Text style={[{fontSize: 20,color: 'black', fontWeight: 'bold'}, { fontFamily: 'Montserrat_700Bold' }]}>
            Edit Client Profile
        </Text>
    </View>
    <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <EditField val='Bobby'submitted={sumbitted}/>
            <EditField val="Miller" submitted={sumbitted}/>
            <EditField val='Falls Church' submitted={sumbitted}/>
            <EditField val='01/01/2001' submitted={sumbitted}/>
            <EditField val="He/Him" submitted={sumbitted}/>
            <EditField val="Living Situation" submitted={sumbitted} multiline={true}/>
            <EditField val="Personal Background" submitted={sumbitted} multiline={true}/>
        </View>
    </ScrollView>
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, justifyContent: 'flex-end', marginBottom: '8%'}}>
        <TouchableOpacity style=
                {{
                    width: '65%',
                    height: 45,
                    backgroundColor: BFTS_BLUE,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15,
                }}
                onPress={() => setSubmittedValue(true)}>
                <Text style={[{fontSize: 18,color: BFTS_WHITE, fontWeight: 'bold'}, { fontFamily: 'Montserrat_700Bold' }]}>
                        Submit Changes
                </Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
);
}
