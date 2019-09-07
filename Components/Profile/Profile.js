import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import {
  Headshot,
  ProfileAvatar
} from "../../StyledComponents/StyledComponents";

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
            <ProfileAvatar source={require("../../assets/close.png")} />
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


