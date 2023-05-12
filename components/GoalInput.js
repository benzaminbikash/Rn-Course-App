import { View, Text, TextInput, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const GoalInput = ({ textHandle, datahandle, show, cancel }) => {
  const [text, setText] = useState('')
  const changeText = t => {
    setText(t)
  }
  return (
    <Modal visible={show} animationType='slide'>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20
        }}
      >
        <TextInput
          onChangeText={changeText}
          placeholder='Course Goal'
          style={{
            borderWidth: 1,
            padding: 10,
            marginVertical: 5,
            borderRadius: 6,
            width: '80%'
          }}
        />
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <View style={{ width: '30%' }}>
            <Button title='Cancel' onPress={cancel} color='red' />
          </View>
          <View style={{ width: '30%' }}>
            <Button title='Add' onPress={datahandle.bind(this, text)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput
