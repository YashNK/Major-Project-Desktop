import React from 'react'
import './settings.css'
import { ArrowLeftStartOnRectangleIcon, EnvelopeIcon, ExclamationCircleIcon, FireIcon, PencilSquareIcon, ShieldExclamationIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
function Settings() {
  const navigate = useNavigate()
    
  return (
    <div className='main-div'>
        <div className='settings-card'>
            <h1 className='settings-header'>Settings</h1>

            <p className='profile-header'>Profile</p>

            <div className='settings-row'>

                <div className='inner1'>
                  <PencilSquareIcon className='logo1'/>
                  <lable className='settings-lable'>
                    Edit Profile
                  </lable>
                </div>

                <div className='inner1'>
                  <TrashIcon className='logo1'/>
                  <lable className='settings-lable'>
                    Delete Profile
                  </lable>
                </div>

            </div>

            <p className='profile-header'>More Info And Support</p>

            <div className='settings-row'>

                <div className='inner1'>
                <ExclamationCircleIcon className='logo1'/>
                  <lable className='settings-lable'>
                    About Us
                  </lable>
                </div>

                <div className='inner1'>
                <ShieldExclamationIcon className='logo1'/>
                  <lable className='settings-lable'>
                    Privacy Settings
                  </lable>
                </div>
                

                <div className='inner1'>
                <EnvelopeIcon className='logo1'/>
                  <lable className='settings-lable'>
                    Contact Us
                  </lable>
                </div>

            </div>

            <p className='profile-header'>Log Out</p>

            <div className='settings-row'>

                <div className='inner1'>
                <ArrowLeftStartOnRectangleIcon className='logo1'/>
                <button onClick={()=>navigate('/')} className='logout'>

                  <lable className='settings-lable'>
                    Logout
                  </lable>
                </button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Settings