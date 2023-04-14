import {React} from 'react'
import { View , Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { BFTS_BLUE, BFTS_WHITE } from '../../constants';
import postTextStyles from './PostTextStyles';

import Moment from 'moment';

const CreatePost = ({post}) => {
    const today = new Moment();

	const day = today.format('M/DD/YY');
	const time = today.format('h:mm a');

    const [text, setText] = useState("");


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            width: '100%',
        },
    });

	const handleSubmit = async e => {
        alert('Post');
    }

    const PostHeader = ({ post }) => (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{/* <Image source={{ uri: post.profile_picture }} style={styles.profile_pic} /> */}
				<Ionicons name="person-outline" size={30} color="blue" style={{ marginLeft: 11, marginTop: 2 }} />
				<Text style={{ color: 'black', marginLeft: 5, fontWeight: '600' }}> {post.user} </Text>
			</View>
		</View>
	);


    return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
            <PostHeader post={post} />
            <View style={{ width: '100%', height: 150, width:'80%', paddingLeft: 10}}>
                <TextInput 
                    placeholder="What's happening?"
                    multiline={true}
                    onChangeText={txt => {setText(txt)}}
                    style={{marginLeft: 15}}
                >
                    {text}
                </TextInput>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <View style={postTextStyles.timeView}>
                        <Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{time + ' - '}</Text>
                        <Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{day}</Text>
                    </View>
                    <TouchableOpacity style={{
                        		width: 80,
                                height: 25,
                                backgroundColor: BFTS_BLUE,
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                        
                        }} onPress={() => handleSubmit()}>

					    <Text style={{fontSize: 15,color: BFTS_WHITE,
		                        fontWeight: 'bold', fontFamily: 'Montserrat_700Bold' }}>Post</Text>
				    </TouchableOpacity>               
                 </View>
		    </View>
        </SafeAreaView>
    );
}

export default CreatePost;