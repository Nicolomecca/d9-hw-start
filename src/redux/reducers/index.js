import { AGGIUNGIFAVORITI } from "../actions"

const initialState = {
  company: [], 
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGGIUNGIFAVORITI:
      return {
        ...state,
        company: [...state.company, action.payload]
      };
    default:
      return state;
  }
};

export default mainReducer