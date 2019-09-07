import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { MockFriends } from "../../MockData";
import { getFriends } from "../../Actions/index";
import { FriendList } from "./FriendList";
import {
  FriendName,
  FriendAvatar,
  FriendCover
} from "../../StyledComponents/StyledComponents";

const Friends = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    props.getFriends(MockFriends.friends);
    setFriends(MockFriends.friends);
  }, []);

  const allFriends = friends.map(friend => {
    return (
      <FriendList
        name={friend.name}
        phone={friend.phone}
        email={friend.email}
      />
    );
  });
  return (
    <ScrollView>
      <FriendCover>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <FriendName>Friends List</FriendName>
          <FriendAvatar source={require("./assets/main-user.png")} />
        </View>
      </FriendCover>
      <View style={{ backgroundColor: "#f7f7f7", minHeight: 600 }}>
        {allFriends}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = store => ({
  friends: store.friends
});

const mapDispatchToProps = dispatch => ({
  getFriends: friend => dispatch(getFriends(friend))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
