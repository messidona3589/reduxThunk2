import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = 'sample/GET_POST';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const intialState = {
  post : null,
  users : null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS] : (state, {payload}) => ({
      ...state,
      post : payload,
    }),
    [GET_USERS_SUCCESS] : (state, {payload}) => ({
      ...state,
      users : payload,
    }),
  },
  intialState,
);

export default sample;