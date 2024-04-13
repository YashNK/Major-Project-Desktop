import React from 'react'
import './ButtonGrp.css'
function ButtonGroup({buttons}) {
  return (
    <div className='button-div'>
        {
            buttons.map((text)=>{
                return <button className=''>{text}</button>
            })
        }
    </div>
  )
}

export default ButtonGroup