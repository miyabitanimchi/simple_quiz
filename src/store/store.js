import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import reactAnswersReducer from '../reducers/reactAnswersReducer';

export default () => {
  const store = createStore(
    combineReducers({
      userInfo: userReducer,
      reactAnswers: reactAnswersReducer,
    })
  );
  return store;
};
