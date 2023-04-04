import { useState, useRef, createRef} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';

export default function EditField({val, submitted, endpoint, multiline}) {
    const [value, setValue] = useState(val);
    const [editValue, setEditValue] = useState(false);

    return (
        <KeyboardAvoidingView style={[{borderColor: 'black', borderRadius: 5, borderWidth: 2, flexDirection: 'row', width: '75%', 
            justifyContent: 'space-between', marginBottom: 10, behavior: 'padding'}, 
            multiline ? {alignItems: 'stretch'} : {alignItems: 'center'}]} 
            backgroundColor={editValue ? BFTS_WHITE : 'lightgrey'}>

            <View style={{width: '85%'}}>
                <TextInput
                    style={{ padding: 10 }}
                    onChangeText={text => setValue(text)}
                    editable={editValue}
                    multiline={multiline}
                    minHeight={multiline ? 80 : 30}
                    maxLength={40}
                >
                    {value}
                </TextInput>
            </View>
            <TouchableOpacity style={[{paddingRight: 10}, multiline ? {paddingTop: 5} : {}]} onPress={() => {setEditValue(true)}}>
                    <Ionicons name="pencil" size={25} color={editValue ? 'grey' : BFTS_BLUE}></Ionicons>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
} 