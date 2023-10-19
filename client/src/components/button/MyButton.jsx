import React from 'react'
import "./button.scss"
const MyButton = ({buttonText}) => {
  return (
    <div className='button'><p>{buttonText}</p></div>
  )
}

export default MyButton