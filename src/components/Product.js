import React from 'react'
import {connect} from 'react-redux'

import '../styles/components/Product.css'

const Product = props => {
  const showProduct = () => {
    return(
      props.productInfo.length > 0 &&
      <div className="card">
        <span className="center-element">
          <img src={props.productInfo[0].product_image} className="card-img-top resize-card" alt=""/>
        </span>
        <div className="card-body">
          <h5 className="card-title">{props.productInfo[0].product_name}</h5>
          <p className="card-text">{props.productInfo[0].product_description}</p>
          <p className="card-text">items_buyed_unit_until_now: {props.productInfo[0].items_buyed_unit_until_now}</p>
          <p className="card-text">carbono_total_accumulated: {props.productInfo[0].carbono_total_accumulated}</p>
          <p className="card-text">carbono_per_unit: {props.productInfo[0].carbono_per_unit}</p>
          <a href={props.productInfo[0].product_url} className="btn btn-primary" target="_blank">Product link</a>
        </div>
      </div>
    )
  }

  const showSimilarProducts = () => {
    return <h4>Listeof similar products</h4>
  }

  return (
    <div className='top-padding'>
      {showProduct()}
      {/*{showSimilarProducts()}*/}
    </div>
  )
}

const mapStateToProps = reducers => {
  return reducers.productosReducers
}

export default connect(mapStateToProps)(Product)

