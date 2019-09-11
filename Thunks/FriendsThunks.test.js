import { 
  getUserFriendsThunk,
  mockFriendRequestThunk,
  acceptFriendRequestThunk,
  removeFriendThunk,
} from './FriendsThunks'

describe('ALL FRIENDS THUNKS', () => {
  describe('getUserFriendsThunk', () => {
    let mockDispatch, mockResponse
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = [{id: 1, name: 'ryan'}]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
    it('Should return a dispatch function', async () => {
      await getUserFriendsThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('HAPPY PATH: Should call the getFriends action', async () => { 
      const mockAction = {
        type: 'GET_FRIENDS',
        friends: mockResponse
      }
      await getUserFriendsThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should call the hasErrored action', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'HAS_ERRORED',
        error: ''
      }

    })
  })
})