import * as action from './index'

describe('Actions', () => {
  describe('getEvents', () => {
    it('Should have the type of GET_EVENTS', () => {
      const expected = 'GET_EVENTS'
      const result = action.getEvents().type

      expect(result).toEqual(expected)
    })
  })
})