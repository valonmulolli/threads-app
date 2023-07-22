import * as React from 'react';
import { Thread } from '../types/threads';
import { View, Text } from 'react-native';
import {
	Ionicons,
	Feather,
	AntDesign,
	FontAwesome,
	MaterialIcons,
} from '@expo/vector-icons';

export default function ThreadsItem(thread: Thread): JSX.Element {
	return (
		<View>
			<Text>{thread.author.username}</Text>
			<View>
				<PostHeading
					name={thread.author.name}
					createdAt={thread.createdAt}
					verified={thread.author.verified}
				/>
			</View>
		</View>
	);
}

function PostHeading({
	name,
	createdAt,
	verified,
}: {
	name: string;
	createdAt: string;
	verified: boolean;
}) {
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
				<Text style={{ fontWeight: '600' }}>{name}</Text>
				{verified && (
					<MaterialIcons name='verified' size={14} color='#60a5fa' />
				)}
			</View>
		</View>
	);
}
