import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

export const CreateEvent = (props) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('')

  return (
    <>
    <View style={styles.container}>
      <Text>Create a New Event!</Text>
      <Input 
        placeholder='Event Name'
        value={eventName}
        onChangeText={ eventName => setEventName(eventName)}
      />
      <Input 
        placeholder='Write a short description'
        value={eventDescription}
        onChangeText={eventDescription => setEventDescription(eventDescription)}
      />
      <Input 
        placeholder='location of the event'
        value={eventLocation}
        onChangeText={eventLocation => setEventLocation(eventLocation)}
      />
      <Input 
        placeholder='time'
        value={eventTime}
        onChangeText={eventTime => setEventTime(eventTime)}
      />
      <Button
        title='Submit'
      ></Button>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: 300,
    width: '100%',
    position: 'absolute',
    top: 200,
    backgroundColor: '#f7f7f7',
    padding: 20
  },
  input: {
    padding: 5,
    color: '#fff'
  }
})



export default connect(null, null)(CreateEvent)