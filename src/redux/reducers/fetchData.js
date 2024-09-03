import { GET_COMPANY } from "../actions"; 

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        searchResults: action.payload, 
      };
    default:
      return state;
  }
};

export default searchReducer;