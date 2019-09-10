import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

export const PendingFriendList = ({ friends }) => {

  // const pendingFriends = friends.map
  return (
    <Text></Text>
  )
}

const mapStateToProps = store => {
  const friends = store.pending
}

export default connect(mapStateToProps, null)(PendingFriendList)
