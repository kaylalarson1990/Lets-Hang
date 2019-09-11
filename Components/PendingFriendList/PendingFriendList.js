import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { PendingFriend } from '../PendingFriend/PendingFriend'

export const PendingFriendList = ({ friends }) => {

  const pendingFriends = friends.map( friend => {
    return <PendingFriend friend={friend} />
  })

  return (
    <View>
      {pendingFriends}
    </View>
  )
}

const mapStateToProps = store => ({
  friends: store.pending
})

export default connect(mapStateToProps, null)(PendingFriendList)
