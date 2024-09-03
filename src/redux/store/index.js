import { configureStore,combineReducers} from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import searchReducer from "../reducers/fetchData";

const rootReducer = combineReducers({
    favourites : mainReducer,
    search : searchReducer,
})

const store = configureStore({
    reducer: rootReducer
})
export default store