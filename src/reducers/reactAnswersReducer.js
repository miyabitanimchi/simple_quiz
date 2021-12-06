import { ADD_ANSWER } from '../actions/actions';

const reactAnswersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      const answer = action.answer;
      return { ...state, ...answer };
    default:
      return state;
  }
};

export default reactAnswersReducer;
