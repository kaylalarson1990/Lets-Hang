import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { View } from 'react-native'

export const SplashPage = () => {
  const [signUp, setSignUp] = useState(false)
  const [signIn, setSignIn] = useState(false)
  

  return (
    <SplashView>
    <LoginForm>
      <Input 
        placeholder='Email'
      />
      <Input 
        placeholder='Password'
      />
    </LoginForm>
    <LogoutForm>
      <SignUpTitle>Sign Up!</SignUpTitle>
      <Input 
        placeholder='First Name'
      />
      <Input 
        placeholder='Last Name'
      />
      <Input 
        placeholder='Email'
      />
      <Input 
        placeholder='Password'
      />
      <Input 
        placeholder='Confirm Password'
      />
      <Input 
        placeholder='Phone number e.g 3031119999'
      />
    </LogoutForm>
    </SplashView>
  )
}

const LoginForm = styled.View`
  height: 50%;
  width: 100%;
`

const LogoutForm = styled.View`
  height: 50%;
  width: 100%
`

const SplashView = styled.View`
  z-index: 1;
  height: 100%;
  width: 100%;
  background: lightblue
  display: flex;
  flex-direction: column;
  justify-content: center
`
const SignUpTitle = styled.Text`
  font-size: 35px;
  text-align: center;
`

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(SplashPage)