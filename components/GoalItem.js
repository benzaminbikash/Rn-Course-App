import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import React from 'react'

const GoalItem = ({ item, OnCliked }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={OnCliked}
      style={{
        backgroundColor: 'red',
        marginVertical: 2,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
      }}
    >
      <Text style={{ color: 'white', fontSize: 17 }}>{item}</Text>
    </TouchableOpacity>
  )
}

export default GoalItem
