import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { MockFriends } from "../../MockData";
import { getFriends } from "../../Actions/index";
import styled from "styled-components";
import { FriendList } from "./FriendList";

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
      <Cover>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Name>Friends List</Name>
          <Avatar source={require("./assets/main-user.png")} />
        </View>
      </Cover>
      <View style={{ backgroundColor: "#f7f7f7", minHeight: 600 }}>
        {allFriends}
      </View>
    </ScrollView>
  );
};

const Name = styled.Text`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-right: 84px;
  text-align: center;
`;

const Avatar = styled.Image`
  top: 10;
  left: 15;
  border-radius: 20px;
  width: 48px;
  height: 48px;
  margin-right: 6px;
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
  overflow: hidden;
  padding-top: 40px;
  background-color: #f7f7f7;
`;

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
