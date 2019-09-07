import React from "react";
import { Text, View } from "react-native";
import {
  EventsName,
  ButtonWrapper,
  Button,
  ButtonDecline,
  Container,
  Content,
  Wrapper,
  Time,
  Description,
  Address,
  Title
} from "../../StyledComponents/StyledComponents";

export const Events = props => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <EventsName>{props.name}</EventsName>
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
