import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AttendingList } from '../AttendingList/AttendingList'

export const AttendingListContainer = ({attending}) => {
  const allAttending = attending.map( person => {
    return <AttendingList name={person} />
  })

  return(
    <View style={styles.AttendingContainer}>
      {allAttending}
    </View>
  )
}

export const styles = StyleSheet.create({
  AttendingContainer: {
    position: 'absolute',
    right: 40,
    top: 30,
    borderRadius: 4,
    backgroundColor: "#FDFFFC",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 1
  }
})
