import React, {useState} from 'react'
import { View, Text, TouchableOpacity, styleSheet, Input } from 'react-native'
import { connect } from 'react-redux'

export const CreateEvent = (props) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('')


  return (
    <View>
      <Text>Create an Event!</Text>
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
    </View>
  )
}



export default connect(null, null)(CreateEvent)