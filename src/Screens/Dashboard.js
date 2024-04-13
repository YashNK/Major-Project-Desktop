import React, { useState } from 'react'
import './Dashboard.css'
import ButtonGroup from '../Components/ButtonGroup'
import AudioRecorder from './AudioRecorder'
import PssCalculation from './PssCalculation'

const buttons = [
  "Record", "Pss"
] 

const RenderComponent = ({index, setIsSelected}) => {
  switch (index) {
    case 0: return <AudioRecorder setIsSelected={setIsSelected}/>
      break;
    case 1: return <PssCalculation />
      break;
  }
}

function Dashboard() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className='dash-container'>
      <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
      <RenderComponent index={isSelected} setIsSelected={setIsSelected}/>
    </div>
  )
}

export default Dashboard