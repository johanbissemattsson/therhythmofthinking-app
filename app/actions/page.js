import { PAGE_CLEAR, PAGE_FETCH_REQUEST, PAGE_FETCH_RECEIVE, PAGE_FETCH_FAILURE } from '../constants/actionTypes';
import {fetchData} from '../utils/fetchData';

export function loadPage(resource) {
  return (dispatch) => {
    dispatch(requestPage(resource));
  };
}

export function clearPage() {
  return {
    type: PAGE_CLEAR
  };
}
function requestPage(resource) {
  return {
    type: PAGE_FETCH_REQUEST,
    resource: resource,
  };
}

function receivePage(resource, data) {
  return {
    type: PAGE_FETCH_RECEIVE,
    resource: resource,
    data: data
  };
}

function receivePageFailure(resource, error) {
  return {
    type: PAGE_FETCH_FAILURE,
    resource: resource,
    error: error.message
  };
}
