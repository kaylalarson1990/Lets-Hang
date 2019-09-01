import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {MockEvents, MockUserEvents} from './MockData';
import { Events } from './Events'

export default App = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(MockEvents.events)
  }, [])

  const allEvents = events.map( event => {
    return <Events name={event.name} key={event.id}/>
  })
  console.log(allEvents)
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {allEvents}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent("Let's Hang", () => App)

