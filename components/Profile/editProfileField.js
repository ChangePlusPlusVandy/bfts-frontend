import { useState, useRef, createRef} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';

export default function EditProfileField({val, submitted, onSubmitFunc}) {
    const [value, setValue] = useState(val);
    const [editValue, setEditValue] = useState(false);

    return (
        <KeyboardAvoidingView style={{borderColor: 'black', borderRadius: 5, borderWidth: 2, flexDirection: 'row', alignItems: 'center', width: '75%', justifyContent: 'space-between', backgroundColor: editValue ? 'white' : 'whitesmoke', marginBottom: 10}} behavior='padding'>
            <View style={{width: '85%'}}>
                <TextInput
                    style={{ padding: 10 }}
                    onChangeText={text => setValue(text)}
                    editable={editValue}
                >
                    {value}{submitted.toString()}
                </TextInput>
            </View>
            <TouchableOpacity style={{paddingRight: 10}} onPress={() => {setEditValue(true)}}>
                    <Ionicons name="pencil" size={25} color={editValue ? 'grey' : BFTS_BLUE}></Ionicons>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
} 