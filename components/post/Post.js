import { LinkingContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import PostFooter from './PostFooter';
import PostText from './PostText';
import postTextStyles from './PostTextStyles';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Post({ post }) {
	const today = new Moment();

	const day = today.format('M/DD/YY');
	const time = today.format('h:mm a');

	const PostHeader = ({ post }) => (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{/* <Image source={{ uri: post.profile_picture }} style={styles.profile_pic} /> */}
				<Ionicons name="person-outline" size={30} color="blue" style={{ marginLeft: 11, marginTop: 2 }} />
				<Text style={{ color: 'black', marginLeft: 5, fontWeight: '600' }}> {post.user} </Text>
			</View>
		</View>
	);

	const PostImage = ({ post }) => (
		<View style={{ width: '100%', height: 150 }}>
			<PostText text="Today has been a successful day  dasjkhdkjashdk dkhasjkdsa ddsa" />
			<View style={postTextStyles.timeView}>
				<Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{time + ' - '}</Text>
				<Text style={{ color: 'grey', fontWeight: '300', fontSize: 15 }}>{day}</Text>
			</View>
		</View>
	);

	return (
		<View style={{ marginBottom: 10 }}>
			<PostHeader post={post} />
			<PostImage post={post} />

			<PostFooter post={post} />
			<View style={{ backgroundColor: '#D3D3D3', width: '100%', borderWidth: 0.5, marginTop: 5 }}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	profile_pic: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.6,
		borderColor: 'black',
	},

	footer_icon: {
		width: 33,
		height: 33,
	},
});
