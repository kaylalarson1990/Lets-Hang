import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const Events = props => {
  return (
    <Container>
      <Content>
        <ColorWrapper>
          <Avatar source={require("./assets/avatar.png")} />
          <Name>{props.name}</Name>
        </ColorWrapper>
        <Wrapper>
          <Title>{props.title}</Title>
          <Time>{props.time}</Time>
        </Wrapper>
        <Button title="More Details">
          <Text
            style={{
              color: "white",
              textAlign: "center"
            }}
          >
            More Details
          </Text>
        </Button>
      </Content>
    </Container>
  );
};

const ColorWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-color: gray;
  align-items: center;
`;

const Name = styled.Text`
  color: black;
  font-size: 18px;
  text-align: center;
  top: 5;
  left: 5;
  margin-left: 10px;
`;

const Button = styled.View`
  background-color: blue;
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
`;

const Container = styled.View`
  background-color: white;
  width: 90%;
  height: 170px;
  max-height: 300px;
  border-radius: 14px;
  border: 1px solid black;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`;

const Content = styled.View`
  flex-direction: column;
  align-items: center;
  height: 50px;
  padding-top: 10px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  top: 5;
  left: 5;
`;

const Wrapper = styled.View`
  align-items: center;
`;

const Time = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
