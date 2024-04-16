import React, { useState, useRef, useContext } from 'react';
import './AudioRecorder.css'; // Import the CSS file
import { authContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid';

const AudioRecorder = ({setIsSelected}) => {
  const [recording, setRecording] = useState(false);
  const [play, setPlay] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [authState, setAuthState] = useContext(authContext);
  const navigate = useNavigate();

  const handleStartRecording = () => {
    if (!navigator.mediaDevices) {
      alert('Audio recording is not supported on this browser.');
      return;
    }

    const constraints = {
      audio: {
        sampleRate: 16000, // Set the desired sampling rate to 16000 Hz
        channelCount: 1, // Mono audio
        mimeType: 'audio/wav', // Specify the audio format (WAV in this case)
      },
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/wav' });
          setAudioBlob(blob);
        };

        recorder.start();
        setMediaRecorder(recorder);
        setRecording(true);
      })
      .catch((err) => {
        console.error('Error accessing microphone:', err);
        alert('Error accessing microphone. Please check your device settings.');
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handlePlayAudio = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setPlay(true);
    }
  };

  const handleSaveAudio = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recorded_audio.wav';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  const handleDeleteAudio = () => {
    setAudioBlob(null);
    audioRef.current.src = '';
  };

 
  return (
      <div className='right-drawer'>

        <h1 className='audio-title'>RECORD YOUR AUDIO</h1>

        <div className='top'>
          <div className='top-left'>
            start your recording
            <button className='start' onClick={recording ? handleStopRecording : handleStartRecording}>
            {recording ? <PauseCircleIcon width={20}/> : <PlayCircleIcon width={20}/>}
            </button>
          </div>
          <div className='top-right'>
            Calculate PSS of your recording <button className='rec-btn' onClick={()=>setIsSelected(1)}>Calculate PSS</button>
          </div>
        </div>
        <div className='middle'>
        <div className='middle-left'>
          save your recording 
          <button className='rec-btn' onClick={handleSaveAudio} disabled={!audioBlob}>Save</button>
        </div>
        <div className='middle-right'>
          Delete your recording
          <button className='rec-btn' onClick={handleDeleteAudio} disabled={!audioBlob}>Delete</button>
        </div>
        </div>
        <div className='end'>
          <div className='end-top'>
              <h5>
                Play Recent Recording
              </h5>
              <button className='play-btn' onClick={handlePlayAudio} disabled={!audioBlob}>
              {play ? <PauseCircleIcon width={45} color='white'/> : <PlayCircleIcon color='white' width={45}/>}</button> 
          </div>
          <div className='end-bottom'>
            <audio ref={audioRef} controls />
          </div>
        </div>
      </div>
  );
};

export default AudioRecorder;
