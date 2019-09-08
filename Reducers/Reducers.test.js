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
  })
})