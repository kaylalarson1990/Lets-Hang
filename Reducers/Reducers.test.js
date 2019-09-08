import { CurrentUserReducer } from './CurrentUserReducer'
import { ErrorReducer } from './ErrorReducer'
import { EventReducer } from './EventReducer'
import { FriendsReducer } from './FriendsReducer'

describe('Reducers', () => {
  describe('CurrentUserReducer', () => {
    it('Should return default state', () => {
      const expected = {}
      const result = CurrentUserReducer(undefined, {})

      expect(result).toEqual(expected)
    })
    it('Should return user object when action type is ADD_CURRENT_USER', () => {
      const mockUser = {
        id: 1,
        name: 'Ryan'
      }
      const mockAction = {
        type: 'ADD_CURRENT_USER',
        user: mockUser
      }
      const expected = mockUser
      const result = CurrentUserReducer({}, mockAction)

      expect(result).toEqual(expected)
    })
  })
  describe('ErrorReducer', () => {
    it('Should return a default state', () => {
      const expected = ''
      const result = ErrorReducer(undefined, {})

      expect(result).toEqual(expected)
    })
    it('Should return action error when type is HAS_ERRORED', () => {
      const mockError = 'This is a mock error'
      const mockAction = {
        type: 'HAS_ERRORED',
        error: mockError
      }
      const expected = mockError
      const result = ErrorReducer('', mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('EventReducer', () => {
    it('Should return default state', () => {
      const expected = []
      const result = EventReducer(undefined, {})

      expect(result).toEqual(expected)
    })
    it('Should return the data out the the event property when type is GET_EVENTS', () => {
      const mockEvents = { data: [
        {id: 1, name: 'ryan'},
        {id: 2, name: 'kayla'}
      ]}
      const mockAction = {
        type: 'GET_EVENTS',
        events: mockEvents
      }
      const expected = mockEvents.data
      const result = EventReducer([], mockAction)

      expect(result).toEqual(expected)
    })
    it('Should add event object to state array when type is ADD_EVENT', () => {
      const mockState = [
        {id: 1, name: 'ryan'},
        {id: 2, name: 'kayla'}
      ]
      const mockEvent = {
        id: 1,
        name: 'Logan'
      }
      const mockAction = {
        type: 'ADD_EVENT',
        event: mockEvent
      }
      const expected = [...mockState, mockEvent]
      const result = EventReducer(mockState, mockAction)

      expect(result).toEqual(expected)
    })
  })
})