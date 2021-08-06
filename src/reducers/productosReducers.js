import {ERROR, LOADING, GET_PRODUCT, SET_ASIN} from '../types/productosTypes'

const INITIAL_STATE = {
  error: null,
  loading: false,
  asinNumber: 'B009QYH9CI',
  productInfo: [],
  similarProducts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return{
        ...state,
        loading: false,
        productInfo: action.payload.productInfo,
        similarProducts: action.payload.similarProducts,
      }
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SET_ASIN:
      return {
        ...state,
        loading: false,
        asinNumber: action.payload,
      }
    default:
      return state
  }
}
