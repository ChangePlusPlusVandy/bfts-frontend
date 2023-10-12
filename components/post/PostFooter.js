import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import CommentPage from './CommentPage';

export default function PostFooter({ post }) {
	const [liked, setLiked] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	
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

			<TouchableOpacity style={{ marginLeft: 15, marginTop: 5 }} onPress={() => {setModalVisible(true)}}>
				<Text style={{ color: 'grey' }}>Load {post.replies.length} comments...</Text>
			</TouchableOpacity>

			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					presentationStyle='fullscreen'
					visible={modalVisible}
					onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}>
					<CommentPage post={post} />
				</Modal>
			</View>
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
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	  },
	  modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	  },
	  button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	  },
	  buttonOpen: {
		backgroundColor: '#F194FF',
	  },
	  buttonClose: {
		backgroundColor: '#2196F3',
	  },
	  textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	  },
	  modalText: {
		marginBottom: 15,
		textAlign: 'center',
	  },
});
