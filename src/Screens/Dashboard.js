import React from 'react'
import './Dashboard.css'
import ButtonGroup from '../Components/ButtonGroup'
import AudioRecorder from './AudioRecorder'

function Dashboard() {
  const buttons = [
    "Record", "Pss"
  ] 
  return (
    <div className='dash-container'>
      <ButtonGroup buttons={buttons} />
      <AudioRecorder />
    </div>
  )
}

export default Dashboard