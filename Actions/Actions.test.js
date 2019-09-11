import * as action from './index'

describe('Actions', () => {
  describe('getEvents', () => {
    it('Should have the type of GET_EVENTS', () => {
      const expected = 'GET_EVENTS'
      const result = action.getEvents().type

      expect(result).toEqual(expected)
    })
    it('Should set argument to the events property', () => {
      const mockEvent = {
        id: 1,
        name: 'ryan'
      }
      const expected = mockEvent
      const result = action.getEvents(mockEvent).events

      expect(result).toEqual(expected)
    })
  })
  describe('getFriends', () => {
    it('Should have the type of GET_FRIENDS', () => {
      const expected = 'GET_FRIENDS'
      const result = action.getFriends().type

      expect(result).toEqual(expected)
    })
    it('Should set the argument to the friends property', () => {
      const mockFriends = [
        {id: 1, name: 'ryan'},
        {id: 2, name: 'kayla'}
      ]
      const expected = mockFriends
      const result = action.getFriends(mockFriends).friends

      expect(result).toEqual(expected)
    })
  })
  describe('addCurrentUser', () => {
    it('should have the type of ADD_CURRENT_USER', () => {
      const expected = 'ADD_CURRENT_USER'
      const result = action.addCurrentUser().type

      expect(result).toEqual(expected)
    })
    it('Should set the argument to the user property', () => {
      const mockUser = {id: 1, name: 'ryan'}
      const expected = mockUser
      const result = action.addCurrentUser(mockUser).user

      expect(result).toEqual(expected)
    })
  })
  describe('hasErrored', () => {
    it('Should have the type of HAS_ERRORED', () => {
      const expected = 'HAS_ERRORED'
      const result = action.hasErrored().type

      expect(result).toEqual(expected)
    })
    it('Should set the argument to the error property', () => {
      const mockError = 'This is a mock error'
      const expected = mockError
      const result = action.hasErrored(mockError).error

      expect(result).toEqual(expected)
    })
  })
  describe('addEvent', () => {
    it('Should have the type of ADD_EVENT', () => {
      const expected = 'ADD_EVENT'
      const result = action.addEvent().type

      expect(result).toEqual(expected)
    })
    it('Should set the argument to the event property', () => {
      const mockEvent = {id: 1, name: 'ryan'}
      const expected = mockEvent
      const result = action.addEvent(mockEvent).event

      expect(result).toEqual(expected)
    })
  })
})