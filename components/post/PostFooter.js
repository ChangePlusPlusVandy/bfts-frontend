import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

export default function PostFooter({ post }) {
	const [liked, setLiked] = useState(false);

	const Caption = ({ post }) => (
		<View style={{ flexDirection: 'row' }}>
			<Text style={{ fontWeight: '600', marginLeft: 15, marginRight: 5 }}>{post.user}</Text>
			<Text>{post.caption}</Text>
		</View>
	);

	const Icon = ({ imgStyle, imgSrc, touch }) => (
		<TouchableOpacity onPress={touch}>
			<Image style={imgStyle} source={imgSrc} cache="force-cache" />
		</TouchableOpacity>
	);

	const likedURL = '../../assets/liked_icon.jpg';
	const unlikedURL = '../../assets/unliked_icon.jpg';
	const commentURL = '../../assets/comment.png';

	return (
		<View>
			<View style={{ marginHorizontal: 15, marginTop: 10 }}>
				<View>
					<View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between' }}>
						<Icon
							imgStyle={styles.footer_icon}
							imgSrc={liked ? require(likedURL) : require(unlikedURL)}
							touch={() => {
								setLiked(!liked);
							}}
						/>
						<Icon imgStyle={styles.footer_icon} imgSrc={require(commentURL)} />
					</View>
				</View>
			</View>

			<Caption post={post} />

			<TouchableOpacity style={{ marginLeft: 15, marginTop: 5 }}>
				<Text style={{ color: 'grey' }}>Load {post.comments.length} comments...</Text>
			</TouchableOpacity>
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
		width: 28,
		height: 28,
	},
});
