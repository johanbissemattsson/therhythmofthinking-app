import { PAGE_CLEAR, PAGE_FETCH_REQUEST, PAGE_FETCH_RECEIVE, PAGE_FETCH_FAILURE } from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
  case PAGE_CLEAR:
    return Object.assign({}, state, {
      content: undefined
    });
  case PAGE_FETCH_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      resource: action.resource
    });
  case PAGE_FETCH_RECEIVE:
    return Object.assign({}, state, {
      isFetching: false,
      content: action.data
    });
  case PAGE_FETCH_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      error: action.error
    });
  default:
    return state;
  }
}
