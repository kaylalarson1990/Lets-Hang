import React from 'react'
import { connect } from 'react-redux'


export const RequestedFriendsList = ({ friends }) => {
  return (

  )
}

const mapStateToProps = store => ({
  friends: store.requested_friends
})

export default connect(mapStateToProps, null)(RequestedFriendsList)