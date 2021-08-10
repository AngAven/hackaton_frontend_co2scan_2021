import axios from 'axios'
import {GET_PRODUCT, LOADING, ERROR, SET_ASIN} from '../types/productosTypes'



export const getProduct = asinNumber => async dispatch => {
  dispatch({
    type: LOADING
  })

  try{
    if (asinNumber){
      const product = await axios.get(`https://app.servernode.angelavendanocruz.com/api/products/${asinNumber}`)
      if (product){
        dispatch({
          type: GET_PRODUCT,
          payload: product.data
        })
      }
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Something went wrong, try it later'
    })
  }
}

export const setASIN = asinNumber => dispatch => {
  dispatch({
    type: SET_ASIN,
    payload: asinNumber,
  })
}
