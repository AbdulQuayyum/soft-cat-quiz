import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import QuestionReducer from './QuestionReducer';
import ResultReducer from './ResultReducer';

const rootReducer = combineReducers({
    Questions: QuestionReducer,
    Result: ResultReducer
})

/** create store with reducer */
export default configureStore({ reducer: rootReducer });