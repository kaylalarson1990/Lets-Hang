import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'react-native-elements'

export const LogInForm = ({setLogIn}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginForm>
    <Input 
      placeholder='Email'
      value={email}
      onChangeText={(email) => setEmail(email)}
    />
    <Input 
      placeholder='Password'
      value={password}
      onChangeText={(password) => setPassword(password)}
    />
    <Button 
      title='Submit'
      containerStyle={{
        marginTop: 20,
      }}
    />
    <Button 
      title='Back to Sign up'
      onPress={() => setLogIn(false)}
      containerStyle={{
        marginTop: 10,
        position: 'absolute',
        right: 155,
        top: 320
      }}
    />
  </LoginForm>
  )
}

const LoginForm = styled.View`
  height: 50%;
  width: 100%;
`
