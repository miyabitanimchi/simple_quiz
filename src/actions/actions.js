export const SET_USER = 'SET_USER';
export const ADD_ANSWER = 'ADD_ANSWER';

export const setUser = (userInfo) => ({
  type: SET_USER,
  userInfo,
});

export const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  answer,
});
