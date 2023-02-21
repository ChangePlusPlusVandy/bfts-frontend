import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Post from '../post/Post';

export default function Community() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView>
				{POSTS.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

const POSTS = [
	{
		imageUrl:
			'https://i.natgeofe.com/n/04fcf985-fc13-4dd3-ac21-03ad540915c1/0000016c-25c4-d982-a7ff-fdf7352c0000_3x2.jpg',
		user: 'User 1',
		likes: 100,
		caption: 'post 1',
		profile_picture: 'https://reactnative.dev/img/tiny_logo.png',
		comments: [
			{
				user: 'User 2',
				comment: 'comment 1.1',
			},
			{
				user: 'drew',
				comment: 'comment 1.2',
			},
			{
				user: 'bob',
				comment: 'comment 1.3',
			},
		],
	},
	{
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
		user: 'User 2',
		likes: 100,
		caption: 'post 2',
		profile_picture: 'https://reactnative.dev/img/tiny_logo.png',
		comments: [
			{
				user: 'bobby',
				comment: 'comment 2.1',
			},
			{
				user: 'drew',
				comment: 'comment 2.2',
			},
			{
				user: 'bob',
				comment: 'comment 2.3',
			},
		],
	},
];
