import React, { useState } from 'react';
import { View, Text } from 'react-native';
import postTextStyles from './PostTextStyles';
import Moment from 'moment';

const PostText = ({ text }) => {
	const today = new Moment();

	const day = today.format('M/DD/YY');
	const time = today.format('h:mm a');

	return (
		<View style={postTextStyles.container}>
			<View>
				<Text style={postTextStyles.post}>{text}</Text>
			</View>
		</View>
	);
};

export default PostText;
