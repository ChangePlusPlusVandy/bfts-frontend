import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { auth } from '../../firebase';
import { useEffect, useState } from 'react';

export default function CommentPage({ post }) {
	const [token, setToken] = useState(null);
	const [id, setId] = useState(null);
	const [comment, setComment] = useState("");
	const [volunteer, setVolunteer] = useState(null);

	auth.onAuthStateChanged((user) => {
		if (user) {
			console.log("Getting token here")
			user.getIdToken().then((tok) => { setToken(tok); setId(user.uid)});
		}
	});

	console.log(token);

	let currReplies = post.replies;

	const requestOptions = {
		method: "GET",
		headers: {"Content-Type": "application/json", "bearer": token},
	}

	const getVolunteerInfo = () => {
		fetch(`https://bfts-backend.herokuapp.com/volunteers/getById/${id}`, requestOptions).then(async (response) => {
			const isJson = response.headers.get("content-type")?.includes("application/json");
			const data = isJson && (await response.json());

			if (!response.ok) {
				const err = (data && data.message) || response.status;
				return Promise.reject(err);
			}
			setVolunteer(data);
		}).catch((error) => {
			console.log(error);
		})
	}

	const addComment = () => {
		currReplies.push({
			'poster': volunteer.name,
			'text': comment
		})

		putOptions = {
			method: 'PUT',
			headers: {"Content-Type": "application/json", "bearer": token},
			body: JSON.stringify({
				text: post.text,
				replies: currReplies
			})
		}

		fetch(`https://bfts-backend.herokuapp.com/posts/update/${post._id}`, putOptions)
	}

	useEffect(getVolunteerInfo, [token]);



	const Comment = ({ comment }) => (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				margin: 5,
				alignItems: 'center',
				marginBottom: 20,
			}}>
			<View style={{ flexDirection: 'column', marginLeft: 5 }}>
				<Text style={{ color: 'black', fontWeight: '600' }}> {"Shivam"} </Text>
				<Text style={{ color: '#5A5A5A' }}>{"Here we are"}</Text>
			</View>
		</View>
	);

	const Caption = ({ post }) => (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontWeight: '600', marginLeft: 15, marginRight: 5 }}>{post.name}</Text>
				<Text>{post.text}</Text>
			</View>
			<View
				style={{
					borderBottomColor: 'black',
					borderBottomWidth: StyleSheet.hairlineWidth,
					marginTop: 10,
					marginBottom: 10,
				}}
			/>
		</View>
	);

	const CommentTextBox = () => (
		<View style={{ alignItems: 'center', marginBottom: 20 }}>
			<TextInput style={styles.input} placeholder="Add a comment" />
		</View>
	);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			flexDirection: 'column', // inner items will be added vertically
			flexGrow: 1, // all the available vertical space will be occupied by it
			justifyContent: 'space-between',
		},
		input: {
			width: 300,
			height: 40,
			backgroundColor: '#fff',
			paddingVertical: 10,
			paddingHorizontal: 15,
			borderColor: '#ccc',
			borderWidth: 1,
			borderRadius: 15,
			fontSize: 16,
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />

			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
				<ScrollView>
					<Caption post={post} />
					{post.replies.map((comment, index) => (
						<Comment comment={comment} key={index} />
					))}
				</ScrollView>

				<CommentTextBox />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
