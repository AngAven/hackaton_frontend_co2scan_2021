import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Menu from './Menu'
import SearchASINnumber from './SearchASINnumber'

// Componets Styles
import '../styles/components/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <div className="container top-padding">
        <Route exact path={'/search-asin-number'} component={SearchASINnumber}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
