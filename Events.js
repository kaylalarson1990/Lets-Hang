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
          <Address>{props.address}</Address>
          <Time>{props.time}</Time>
        </Wrapper>
        <Button title="More Details">
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16
            }}
          >
            MORE DETAILS
          </Text>
        </Button>
      </Content>
    </Container>
  );
};

const ColorWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Name = styled.Text`
  color: black;
  font-size: 20px;
  text-align: center;
  margin-left: 10px;
`;

const Button = styled.View`
  background-color: #4D8CFF;
  width: 60%;
  height: 48px;
  position: relative;
  border-radius: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 13px;
  elevation: 2;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  
`;

const Container = styled.View`
  width: 90%;
  min-height: 250px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  elevation: 3;
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
  margin-left: 10px;
`;

const Wrapper = styled.View`
  align-items: center;
`;

const Time = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Address = styled.Text`
  color: black;
  font-size: 16px;
  margin-top: 15px;
`;

const Title = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
