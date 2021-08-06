import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      asinNumber: '',
      serviceURL: 'https://servernode.angelavendanocruz.com/api/products/',
      productInfo: [],
      similarProducts: [],
    }
  }

  handleNumber = (e) => {
    this.setState({
      asinNumber: e.target.value
    })
  }

  searchASINnumber = async (e) => {
    e.preventDefault()
    const asinNumber = this.state.asinNumber
    const product = await axios.get( `${this.state.serviceURL}${asinNumber}`)
    const productInfo = product.data.productInfo
    const similarProducts = product.data.similarProducts

    console.log('productInfo', product.data.productInfo)
    console.log('similarProducts', product.data.similarProducts)

    this.setState({
      productInfo: productInfo,
      similarProducts: similarProducts,
    })
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
                value={this.state.asinNumber}
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

export default Search
