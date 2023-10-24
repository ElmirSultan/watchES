import React from 'react'
import "./button.scss"
const MyButton = ({buttonText,butonKlik}) => {
  return (
    <div className='button' onClick={butonKlik}><p>{buttonText}</p></div>
  )
}

export default MyButton