import React from 'react'

//Redux
import {connect} from 'react-redux'
import * as productsActions from '../actions/productsActions'

class Search extends React.Component {
  handleNumber = (e) => {
    this.props.setASIN(e.target.value)
  }

  searchASINnumber = e => {
    e.preventDefault()
    this.props.getProduct(this.props.asinNumber)
  }

  render(){
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex container">
              <input
                className="form-control me-2"
                type="search"
                placeholder="ASIN number"
                aria-label="Search"
                onChange={this.handleNumber}
                value={this.props.asinNumber}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={this.searchASINnumber}
              >Search
              </button>
            </form>
          </div>
        </nav>
      </>
    )
  }
}


const mapStateToProps = reducers => {
  return reducers.productosReducers
}

export default connect(mapStateToProps, productsActions)(Search)
