import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StopWatch from '../../utils/StopWatch.js';
import { homeStyles, timerOptions } from './homeStyles'
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
									resizeMode='contain'
									style={{
										width: 135,
										height: 74,
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
	
			<ImageBackground
				style={homeStyles.headerImage}
				source={ require('../../assets/Pic.jpg') }>
				<View style={homeStyles.imageContainer}>
				
					<Text>Welcome to ToothFlex!</Text>

					<StopWatch
				start={timerOn}
				reset={timerReset}
				options={timerOptions}
				handleFinish={handleTimerFinish()}
				getTime={(time) => {
					// console.log(time);
				}}
			/>
			<TouchableOpacity style={homeStyles.roundButton} onPress={toggleTimer}>
				<Text style={homeStyles.roundButtonText}>{timerOn ? 'STOP' : 'START'}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={homeStyles.resetButton} onPress={resetTimer}>
				<Text>RESET</Text>
			</TouchableOpacity>
				</View>
			</ImageBackground>

		</View>
	);
}