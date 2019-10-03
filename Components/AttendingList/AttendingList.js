import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export const AttendingList = ({name}) => {
  return (
    <Text style={styles.attendingName}>{name}</Text>
  )
}

export const styles = StyleSheet.create({
  attendingName: {
    margin: 2,
      
  }
})