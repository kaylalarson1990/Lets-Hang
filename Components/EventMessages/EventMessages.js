import React, { useState, useEffects } from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import {ActionCable, Cable } from '@kesha-antonov/react-native-action-cable'
import { connect } from 'react-redux'

export const EventMessages = (props) => {
  const actionCable = ActionCable.createConsumer('ws://localhost:3000/cable')
  const cable = new Cable({})
  
  console.log(props)
  return (
    <View>
      <Text>Ryan</Text>
    </View>
  )
}

const mapStateToProps = store => ({
  userId: store.currentUser.id
})

export default withNavigation(
  connect(mapStateToProps)(EventMessages)
  );