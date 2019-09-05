import React from "react";
import styled from "styled-components";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";

export const Profile = props => {
  return (
    <>
      <ScrollView>
        <Headshot source={require("../../assets/profile-picture.png")} />
          <Text>
            Name: Jordan Taylor
          </Text>
        <Button title="Edit Profile" />
        <Text>Email: </Text>
        <Button title="Edit" />
        <Text>Phone Number: </Text>
        <Button title="Edit" />
      </ScrollView>
    </>
  );
};

const Headshot = styled.Image`
  width: 100%;
  height: 300px;
`;
