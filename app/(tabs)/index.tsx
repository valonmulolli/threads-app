import * as React from 'react';
import { ScrollView, StyleSheet, Platform, RefreshControl } from 'react-native';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createRandomUser } from '../../utils/generate-fake-data';
import { ThreadsContext } from '../../context/thread-context';
import ThreadItem from '../../components/ThreadItem';

const user = createRandomUser();


export default function TabOneScreen() {
	const animationRef = React.useRef<Lottie>(null);
	const threads = React.useContext(ThreadsContext);

	return (
		<SafeAreaView>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 10,
				}}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							animationRef.current?.play();
						}}
						tintColor={'transparent'}
					/>
				}
			>
				<Lottie
					ref={animationRef}
					source={require('../../assets/threads.json')}
					loop={false}
					autoPlay={true}
					style={{ width: 90, height: 90, alignSelf: 'center' }}
				/>
				   {threads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
			</ScrollView>
		</SafeAreaView>
	);
}
