import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, SafeAreaView, RefreshControl } from 'react-native';
import Post from '../post/Post';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';
import React from 'react';

export default function Community() {
	const [token, setToken] = useState(null);
	const [posts, setPosts] = useState([]);

	const [refreshing, setRefreshing] = useState(false);
	const [reloaded, setReloaded] = useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			setReloaded(!reloaded);
		}, 2000);
	}, []);

	auth.onAuthStateChanged(user => {
		if (user) {
			console.log('Getting token here');
			user.getIdToken().then(tok => {
				setToken(tok);
			});
		}
	});

	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', bearer: token },
	};

	const fetchPosts = () => {
		fetch('https://bfts-backend.herokuapp.com/posts/getAll', requestOptions)
			.then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && (await response.json());

				if (!response.ok) {
					const err = (data && data.message) || response.status;
					return Promise.reject(err);
				}

				setPosts(
					data.sort(function (a, b) {
						if (new Date(b) > new Date(a)) {
							return 1;
						} else {
							return -1;
						}
					})
				);
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(fetchPosts, [token, refreshing]);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				{posts.map((post, index) => (
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
