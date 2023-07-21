import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';

export default function TabOneScreen() {
	return (
		<SafeAreaView>
			<ScrollView>
				<Lottie
					source={require('../../assets/threads.json')}
					loop={true}
					autoPlay={true}
					style={{ width: 90, height: 90, alignSelf: 'center' }}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
