import React from 'react'
import '../styles/components/Spinner.css'

const Spinner = () => {
  return (
    <div className='center-element top-padding'>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
