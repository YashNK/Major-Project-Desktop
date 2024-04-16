import React from 'react'
import './ButtonGrp.css'
function ButtonGroup({buttons, isSelected, setIsSelected}) {
  return (
    <div className='button-div'>
        {
          buttons.map((text, index)=>{
            return <button
            className={isSelected == index ? "selected-btn" : "btn"}
            onClick={()=>setIsSelected(index)}
            >{text.icon && <text.icon className="btn-icon" />}{text.name}</button>
          })
        }
        </div>
  )
}

export default ButtonGroup