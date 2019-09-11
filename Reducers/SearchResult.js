export const SearchResultReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SEARCH':
      return action.search
    default: 
      return state
  }
}