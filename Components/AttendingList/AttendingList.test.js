import 'react-native'
import React from 'react'
import { AttendingList } from './AttendingList'

import { shallow } from 'enzyme'

describe('AttendingList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AttendingList name={'ryan'} />)
  })
  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})