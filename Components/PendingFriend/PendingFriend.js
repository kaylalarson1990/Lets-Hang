import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const PendingFriend = ({ friend }) => {
  return (
    <View>
      <Text>{friend.name}</Text>
      <Text>{friend.phone_number}</Text>
      <Text>{friend.email}</Text>
      <TouchableOpacity>
        <Text>Decline</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Accept</Text>
      </TouchableOpacity>
    </View>
  )
}