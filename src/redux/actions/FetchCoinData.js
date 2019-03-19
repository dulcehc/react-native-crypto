import axios from 'axios';
import { apiBaseURL } from './../../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../types/types'

export const fetchCoinData = () => {
  return dispatch => {

    dispatch({ type: FETCHING_COIN_DATA })

    return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
      });
  }
}