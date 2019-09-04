import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { View } from 'react-native'

export const SplashPage = () => {

  return (
    <Form>
      <Input 
        placeholder='First Name'
        label='First Name'
        
      />
      <Input 
        placeholder='Last Name'
      />
    </Form>
  )
}

const Form = styled.View`
  z-index: 1;
  height: 100%;
  width: 100%;
  background: lightblue
  display: flex;
  flex-direction: column;
  justify-content: center
`

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(SplashPage)