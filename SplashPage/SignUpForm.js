import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity, Text } from "react-native";

export const SignUpForm = ({ setSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <SignUp>
      <Input
        placeholder="First Name"
        value={firstName}
        onChangeText={firstName => setFirstName(firstName)}
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChangeText={lastName => setLastName(lastName)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
      />
      <Input
        placeholder="Phone number e.g 3031119999"
        value={phoneNumber}
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Submit"
        containerStyle={{
          marginTop: 20
        }}
      />
      <TouchableOpacity
        onPress={() => setSignUp(false)}
        containerStyle={{
          marginTop: 10,
          position: "absolute",
          right: 175,
          top: 400
        }}
        raised={true}
      >
        <Text style={{ color: "#1F89DC", fontSize: 16, marginTop: 100 }}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </SignUp>
  );
};

const SignUp = styled.View`
  height: 50%;
  width: 100%;
`;

const SignUpTitle = styled.Text`
  font-size: 35px;
  text-align: center;
`;
