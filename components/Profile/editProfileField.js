import { useState, useRef} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BFTS_BLUE } from '../../constants';

export default function editProfileField({val}) {
    const [value, setValue] = useState(val);
    const [editValue, setEditValue] = useState(false);
    const refInput = useRef();

    return (
        <KeyboardAvoidingView style={{borderColor: 'black', borderRadius: 5, borderWidth: 2, flexDirection: 'row', alignItems: 'center', width: '75%', justifyContent: 'space-between'}} behavior='padding'>
            <View style={{width: '85%', backgroundColor: 'red'}}>
                <TextInput
                    style={{ padding: 10 }}
                    onChangeText={text => setValue(text)}
                    editable={editValue}
                    ref={refInput}
                >
                    {value}
                </TextInput>
            </View>
            <TouchableOpacity style={{paddingRight: 10}} onPress={() => {setEditValue(true); refInput.current.focus()}}>
                    <Ionicons name="pencil" size={25} color={BFTS_BLUE}></Ionicons>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
} 