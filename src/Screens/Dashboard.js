import React, { useState } from 'react'
import './Dashboard.css'
import ButtonGroup from '../Components/ButtonGroup'
import AudioRecorder from './AudioRecorder'
import PssCalculation from './PssCalculation'
import { CalculatorIcon, MicrophoneIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const buttons = [
  {name:"Record", icon: MicrophoneIcon},
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
      <div className='dash-drawer'>
        <div className='div1'>
          <UserCircleIcon color='white' width={70}/>
          <h1 className='name'>Better Speak</h1>
          <p className='email'>betterspeak@gmail.com</p>
        </div>
        
        <div className='div2'>
          <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>

        {/* <div className='div3'></div> */}
      
      </div>

      <RenderComponent index={isSelected} setIsSelected={setIsSelected}/>
    </div>
  )
}

export default Dashboard