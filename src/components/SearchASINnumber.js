import React from 'react'

//Components
import Search from './Search'
import Product from './Product'

class SearchASINnumber extends React.Component {
  render(){
    return (
      <div className={'container'}>
        <Search/>
        <Product/>
      </div>
    )
  }
}

export default SearchASINnumber
