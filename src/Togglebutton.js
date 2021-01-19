import React from 'react'
import './styles.css'

const Togglebutton = (props) => {
 return (
  <React.Fragment>
   <button onClick={props.click} className ='btn'>
    Toggle Filters
   </button>
  </React.Fragment>
 )
}

export default Togglebutton
