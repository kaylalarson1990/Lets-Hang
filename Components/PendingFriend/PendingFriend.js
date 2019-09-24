import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { acceptFriendRequestThunk, removeFriendThunk } from '../../Thunks/FriendsThunks'
import { Button } from 'react-na'

export const PendingFriend = ({ friend, acceptRequest, removeFriend, userKey }) => {
  const [accepted, setAccepted] = useState(false)
  const [declined, setDeclined] = useState(false)

  const handleAcceptRequest = async (id, key) => {
    await acceptRequest(id, key)
    setAccepted(true)
  }
  const handleRemoveFriend = async (id, key) => {
    await removeFriend(id, key)
    setDeclined(true)
  }
  return (
    <View style={styles.pendingFriendContainer}>
      <View style={styles.pendingFriendContent}>
        <View style={styles.pendingFriendWrapper}>
          <Text style={styles.pendingFriendName}>{friend.name}</Text>
          <Text style={styles.phone}>{friend.phone_number}</Text>
          <Text style={styles.email}>{friend.email}</Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
          {!accepted && !declined && <TouchableOpacity onPress={() => removeFriend(friend.id, userKey)}>
              <Button
                title="Decline"
                containerStyle={{
                  width: 100,
                  display: "flex",
                  marginTop: 10,
                  marginBottom: 10
                }}
                buttonStyle={{
                  width: "100%",
                  backgroundColor: "#FDFFFC"
                }}
                titleStyle={{
                  color: "#011627",
                  fontSize: 20
                }}
                raised={true}
              />
            </TouchableOpacity>}
            {!accepted && !declined && <TouchableOpacity onPress={() => acceptRequest(friend.id, userKey)}>
              <Button
                title="Accept"
                containerStyle={{
                  width: 100,
                  display: "flex",
                  marginTop: 10,
                  marginBottom: 10
                }}
                buttonStyle={{
                  width: "100%",
                  backgroundColor: "#011627"
                }}
                titleStyle={{
                  color: "#FDFFFC",
                  fontSize: 20
                }}
                raised={true}
              />
            </TouchableOpacity>}
            {accepted && <Text>Friend Request Accepted!</Text>}
          {declined && <Text>Friend Request Declined</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  pendingFriendContainer: {
    backgroundColor: "#FDFFFC",
    minHeight: 200,
    borderRadius: 4,
    margin: 10,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    elevation: 2
  },
  pendingFriendContent: {
    flexDirection: "column",
    height: 50,
    paddingTop: 10
  },
  pendingFriendWrapper: {
    marginTop: 4,
    marginLeft: 24,
    marginBottom: 4,
    marginRight: 24
  },
  email: {
    color: "#767676",
    fontSize: 20,
    marginTop: 4
  },
  phone: {
    color: "#767676",
    fontSize: 20,
    marginTop: 4
  },
  pendingFriendName: {
    color: "#011627",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 4
  }
});
const mapStateToProps = store => ({
  userKey: store.currentUser.attributes.api_key
});

const mapDispatchToProps = dispatch => ({
  acceptRequest: (id, key) => dispatch(acceptFriendRequestThunk(id, key)),
  removeFriend: (id, key) => dispatch(removeFriendThunk(id, key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingFriend);
