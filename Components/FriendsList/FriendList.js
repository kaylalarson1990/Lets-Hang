import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FriendListContainer,
  FriendListContent,
  FriendListWrapper,
  Email,
  Phone,
  FriendListName
} from "../../StyledComponents/StyledComponents";

export const FriendList = props => {
  return (
    <FriendListContainer>
      <FriendListContent>
        <FriendListWrapper>
          <FriendListName>{props.name}</FriendListName>
          <Phone>{props.phone}</Phone>
          <Email>{props.email}</Email>
        </FriendListWrapper>
      </FriendListContent>
    </FriendListContainer>
  );
};
