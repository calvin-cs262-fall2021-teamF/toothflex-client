import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Timer } from 'react-native-stopwatch-timer';
import { homeStyles, options } from './homeStyles'
import AboutScreen from '../about/About';

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home"
				component={HomeScreen}
				options={{
					title: (
						<View>
							<TouchableOpacity onPress={() => navigation.navigate('About')}>
								<Image
									source={require('../../assets/logo.png')}
									resizeMode="contain"
									style={{
										width: 120,
										height: 76,
									}}
								/>
							</TouchableOpacity>
						</View>
					),
					headerStyle: {
						height: 75
					},
				}}
			/>
			<Stack.Screen name="About" component={AboutScreen} />
		</Stack.Navigator>
	);
}

function HomeScreen({ navigation }) {
	const [timerDuration, setTimerDuration] = useState(120000)
	const [timerOn, setTimerOn] = useState(false)
	const [timerReset, setTimerReset] = useState(false)

	const toggleTimer = () => {
		setTimerOn(!timerOn)
		setTimerReset(false)
	}

	const resetTimer = () => {
		setTimerOn(false)
		setTimerReset(true)
	}

	const handleTimerFinish = () => {
		// alert("Time's up!")
	}

	return (
		<View style={homeStyles.container}>
			<Text>Welcome to ToothFlex!</Text>

			<Timer
				totalDuration={timerDuration}
				msec
				start={timerOn}
				reset={timerReset}
				options={options}
				handleFinish={handleTimerFinish()}
				getTime={(time) => {
					// console.log(time);
				}} />

			<TouchableOpacity style={homeStyles.roundButton} onPress={toggleTimer}>
				<Text>{timerOn ? 'STOP' : 'START'}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyles.resetButton} onPress={resetTimer}>
				<Text>RESET</Text>
			</TouchableOpacity>
		</View>
	);
}
