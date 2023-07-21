import * as React from 'react';
import { ScrollView, StyleSheet, Platform, RefreshControl } from 'react-native';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createRandomUser } from '../../utils/generate-fake-data';

const user = createRandomUser()

console.log(user)

export default function TabOneScreen() {
	const animationRef = React.useRef<Lottie>(null);

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
			</ScrollView>
		</SafeAreaView>
	);
}
