import React from 'react'

function ButtonGroup({buttons}) {
  return (
    <div>
        {
            buttons.map((text)=>{
                return <button className=''>{text}</button>
            })
        }
    </div>
  )
}

export default ButtonGroup