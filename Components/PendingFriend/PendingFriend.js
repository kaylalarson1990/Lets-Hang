import React from 'react'
import { View, Text } from 'react-native'

export const PendingFriend = ({ friend }) => {
  return (
    <View>
      <Text>friend.name</Text>
      <Text>friend.phone_number</Text>
      <Text>friend.email</Text>
    </View>
  )
}