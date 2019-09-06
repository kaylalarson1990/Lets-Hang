import React from "react";
import styled from "styled-components";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

export const Profile = props => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Avatar source={require("../../assets/close.png")} />
          </TouchableOpacity>
        </View>
        <Headshot source={require("../../assets/profile-picture.png")} />
        <Text>Name: Jordan Taylor</Text>
        <Button
          title="Edit Profile"
          buttonStyle={{
            width: "60%"
          }}
          raised={true}
        />
        <Text>Email: </Text>
        <Text>Phone Number: </Text>
      </ScrollView>
    </>
  );
};

const Headshot = styled.Image`
  width: 100%;
  height: 300px;
`;

const Avatar = styled.Image`
  top: 10;
  left: 15;
  display: flex;
  justify-content: flex-end;
  border-radius: 20px;
  width: 48px;
  height: 48px;
  margin-top: 50px;
  margin-bottom: 20px;
`;
