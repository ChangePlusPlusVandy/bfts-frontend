import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';

export default function CommentPage({ post }) {
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
				<Text style={{ color: 'black', fontWeight: '600' }}> {comment.user} </Text>
				<Text style={{ color: '#5A5A5A' }}>{comment.comment}</Text>
			</View>
		</View>
	);

	const Caption = ({ post }) => (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontWeight: '600', marginLeft: 15, marginRight: 5 }}>{post.user}</Text>
				<Text>{post.caption}</Text>
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
					{post.comments.map((comment, index) => (
						<Comment comment={comment} key={index} />
					))}
				</ScrollView>

				<CommentTextBox />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
