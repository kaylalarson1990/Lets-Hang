import React from 'react'
import { connect } from 'react-redux'
import RequestedFriend from '../RequestedFriend/RequestedFriend'
import { View } from 'react-native'

export const RequestedFriendsList = ({ friends }) => {

  const allFriends = friends.map( friend => {
    return <RequestedFriend friend={friend} />
  })
  return (
    <View>
      {allFriends}
    </View>
  )
}

const mapStateToProps = store => ({
  friends: store.requested_friends
})

export default connect(mapStateToProps, null)(RequestedFriendsList)