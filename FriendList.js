import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const FriendList = props => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Name>{props.name}</Name>
          <Phone>{props.phone}</Phone>
          <Email>{props.email}</Email>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  min-height: 150px;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  elevation: 2;
`;

const Content = styled.View`
  flex-direction: column;
  height: 50px;
  padding-top: 10px;
`;

const Wrapper = styled.View`
  margin: 4px 24px;
`;

const Email = styled.Text`
  color: #767676;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Phone = styled.Text`
  color: #767676;
  font-size: 20px;
  margin-top: 4px;
`;

const Name = styled.Text`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin-top: 4px;
`;
