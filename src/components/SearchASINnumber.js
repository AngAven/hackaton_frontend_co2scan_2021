import React from 'react'

//Redux
import {connect} from 'react-redux'

//Components
import Search from './Search'
import Product from './Product'
import Spinner from './Spinner'


class SearchASINnumber extends React.Component {
  showProductResult = () => {
    if (this.props.loading){
      return <Spinner/>
    }
    return <Product/>
  }

  render(){
    return (
      <div className={'container'}>
        <Search/>
        {this.showProductResult()}
      </div>
    )
  }
}

const mapStateToProps = reducers => {
  return reducers.productosReducers
}

export default connect(mapStateToProps)(SearchASINnumber)
