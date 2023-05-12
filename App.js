import { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Alert,
  ToastAndroid
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { Modal } from 'react-native'

export default function App () {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)

  const HandleData = text => {
    if (text.length > 0) {
      setData([...data, text])
      setShow(false)
    } else {
      Alert.alert('Please Add Goal')
    }
  }
  const deteleItem = index => {
    const newData = data.filter((item, i) => i !== index)
    setData(newData)
  }
  const cancelModal = () => {
    setShow(false)
  }

  return (
    <View style={{ marginTop: 50 }}>
      <View
        style={{
          padding: 50
        }}
      >
        <Button title='Add New Goal' onPress={() => setShow(true)} />
        <GoalInput
          cancel={() => cancelModal()}
          datahandle={HandleData}
          show={show}
        />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <GoalItem item={item} OnCliked={() => deteleItem(index)} />
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
