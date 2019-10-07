import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'


export const AttendingList = ({name}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.attendingName}>{name}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  attendingName: {
    margin: 2,
      
  }
})