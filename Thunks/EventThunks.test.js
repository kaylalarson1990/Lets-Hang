import { getEventsThunk, createEventThunk } from './EventThunks'


describe('ALL EVENT THUNKS', () => {
  describe('getEventsThunk', () => {
    let mockResponse, mockDispatch
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = [{id: 1, name: 'ryan'}]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
    it('Should call a dispatch', async () => {
      const response = await getEventsThunk()(mockDispatch)
      
      expect(mockDispatch).toHaveBeenCalled()
    })
    it('HAPPY PATH: Should call the getEvents action', async () => {
      const mockAction = {
        type: 'GET_EVENTS',
        events: mockResponse
      }
      await getEventsThunk()(mockDispatch)
      
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should call the hasErrored action', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'HAS_ERRORED',
        error: TypeError('Promise.catch is not a function')
      }
      await getEventsThunk()(mockDispatch)
      
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
  
  describe('createEventThunk', () => {
    let mockDispatch, mockResponse
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {data: {attributes: {id: 1, name: 'ryan'}}}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
      it('Should return a dispatch function', async () => {
        await createEventThunk()(mockDispatch)
        
        expect(mockDispatch).toHaveBeenCalled()
      })
      it('HAPPY PATH: Should call the addEvent action', async () => {
        const mockAction = {
          type: 'ADD_EVENT',
          event: mockResponse
        }
        await createEventThunk()(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(mockAction)
      })
      it("SAD PATH: Should call the hasErrored action", async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.catch()
        })
        const mockAction = {
          type: 'HAS_ERRORED',
          error: 'Promise.catch is not a function'
        }
        await createEventThunk()(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(mockAction)
      })
  })
})