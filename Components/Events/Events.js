import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const Events = props => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Name>{props.name}</Name>
          <Title>{props.title}</Title>
          <Address>{props.address}</Address>
          <Time>{props.time}</Time>
          <Description>{props.description}</Description>
        <ButtonWrapper>
          <ButtonDecline title="Decline">
            <Text
              style={{
                color: "#4d8cff",
                textAlign: "center",
                fontSize: 16
              }}
              >
              Decline
            </Text>
          </ButtonDecline>
          <Button title="Accept">
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16
              }}
              >
              Accept
            </Text>
          </Button>
        </ButtonWrapper>
      </Wrapper>
      </Content>
    </Container>
  );
};

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5%;
  height: 100%;
`;

const Button = styled.View`
  background-color: #4d8cff;
  width: 40%;
  height: 48px;
  border-radius: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 13px;
`;

const ButtonDecline = styled.View`
  background-color: white;
  border: #4d8cff 1px solid;
  width: 40%;
  height: 48px;
  border-radius: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 13px;
`;

const Container = styled.View`
  width: 96%;
  min-height: 300px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  elevation: 2;
`;

const Content = styled.View`
  flex-direction: column;
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
  margin: 4px 24px;
`;

const Time = styled.Text`
  color: #767676;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Description = styled.Text`
  color: black;
  font-size: 16px;
  margin-top: 24px;
`;

const Address = styled.Text`
  color: #767676;
  font-size: 20px;
  margin-top: 4px;
`;

const Title = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;

const Name = styled.Text`
color: black;
font-size: 32px;
font-weight: bold;
margin-top: 4px;
`
