import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
})

export default CustomButton;