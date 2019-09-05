import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity, Text } from "react-native";
import LottieView from 'lottie-react-native'
import { connect } from 'react-redux'
import { addNewUserThunk } from '../Thunks/UserThunks'
import { withNavigation } from 'react-navigation'

export const SignUpForm = ({ setSignUp, navigation, addNewUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const checkUserSignUp = async () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      password,
      password_confirmation: confirmPassword
    }
    setIsLoading(true)
    const response = await addNewUser(user)
    setIsLoading(false)
    if (response.error) {
      setFailure(true)
    } else {
      setSuccess(true)
    }
    return response
  }

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
      {!isLoading && !success && !failure && <Button
        title='Submit'
        onPress={() => checkUserSignUp()}
        style={{
          width: 200,
          height: 200
        }}
      >
      </Button>}
      {isLoading && <LottieView
        ref={ animation => {
          waveAnimation = animation
        }} 
        source={require('../Animations/196-material-wave-loading.json')}
        loop={true}
        speed={1}
        autoPlay
        style={{
          marginTop: 20
        }}
      />}
      {!isLoading && success && <LottieView 
        source={require('../Animations/4431-success.json')}
        ref={ animation => {
          successAnimation = animation
        }}
        autoPlay
        style={{
          marginTop: 20
        }}
        loop={false}
        onAnimationFinish={() => navigation.navigate('Home')}
      />}
        {!isLoading && failure && <LottieView 
        source={require('../Animations/6952-fail.json')}
        autoPlay
        loop={false}
        speed={2}
        style={{
          marginTop: 20
        }}
        onAnimationFinish={() => setFailure(false)}
      />}
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

const mapDispatchToProps = dispatch => ({
  addNewUser: (user) => dispatch(addNewUserThunk(user))
})

export default withNavigation(connect(null, mapDispatchToProps)(SignUpForm))
