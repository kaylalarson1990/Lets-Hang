import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

export const RequestedFriend = ({ friend }) => {
  return (
    <View>
      <Text>{friend.name}</Text>
      <Text>{friend.phone_number}</Text>
      <Text>{friend.email}</Text>
      <TouchableOpacity>
        <Button title='Decline' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button title="Accept" />
      </TouchableOpacity>
    </View>
  );
};

export default connect(
  null,
  null
)(RequestedFriend);
