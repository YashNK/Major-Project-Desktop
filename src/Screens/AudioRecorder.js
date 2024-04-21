import React, { useState, useRef, useContext } from 'react';
import './AudioRecorder.css'; // Import the CSS file
import { authContext } from '../App';
import { useNavigate } from 'react-router-dom';
import {MediaRecorder, register} from 'extendable-media-recorder';
import {connect} from 'extendable-media-recorder-wav-encoder';
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

await register(await connect());

const AudioRecorder = ({setIsSelected}) => {
  const [recording, setRecording] = useState(false);
  const [play, setPlay] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [authState, setAuthState] = useContext(authContext);
  const navigate = useNavigate();
  const [pss, setPss] = useState(0);

  const calculatePSS = async () => {
    try {
      const audioData = new FormData();
      audioData.append('audio', audioBlob, 'audio.wav');
      console.log(audioData);
  
      const [interResponse, repResponse, prolResponse] = await Promise.all([
        axios.post("http://127.0.0.1:8001/api/interjection", audioData),
        axios.post("http://127.0.0.1:8002/api/repetition", audioData),
        axios.post("http://127.0.0.1:8003/api/prolongation", audioData)
      ]);
  
      const inter = interResponse.data.prediction;
      const rep = repResponse.data.prediction;
      const prol = prolResponse.data.prediction;
  
      let result = [];
      for (let i = 0; i < inter.length; i++) {
        const sum = inter[i] + rep[i] + prol[i];
        result.push(sum);
      }
  
      const sum = result.reduce((acc, curr) => acc + curr, 0);
      let pssScore = (sum / 185) * 100;
      setPss(pssScore);
      console.log("the pss is:", pssScore);
  
      return pssScore; // Optionally return the PSS score
    } catch (error) {
      console.error('Error calculating PSS:', error);
      return null; // Handle error case
    }
  };
  


    
  const handleStartRecording = async () => {


    if (!navigator.mediaDevices) {
      alert('Audio recording is not supported on this browser.');
      return;
    }

    const constraints = {
      audio: {
        sampleRate: 16000, // Set the desired sampling rate to 16000 Hz
        echoCancellation: true,
      },
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const recorder = new MediaRecorder(stream, {
          mimeType: 'audio/wav',
        });
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
        <div>
        The sun shone brightly, casting a warm glow over the small town.
         Children played in the park, their laughter echoing through the air.
          The park was a favorite spot for families, offering a place to relax and enjoy the outdoors.
           As the day progressed, the park became more crowded, with people gathering to enjoy the beautiful weather.
            The sound of children's voices filled the air, punctuated by the occasional 'um' or 'uh' as they tried to find the right words.
             The park was a place where everyone felt welcome, a place where friendships were made and memories were created.
              Despite the noise and activity, the park remained a peaceful oasis in the heart of the town
        </div>
        <div className='top'>
          <div className='top-left'>
            start your recording
            <button className='start' onClick={recording ? handleStopRecording : handleStartRecording}>
            {recording ? <PauseCircleIcon width={20}/> : <PlayCircleIcon width={20}/>}
            </button>
          </div>
          <div className='top-right'>
            Calculate PSS of your recording <button className='rec-btn' onClick={()=>{
              calculatePSS()
              // setIsSelected(1)
              }}>Calculate PSS</button>
          </div>
        </div>
        <div className='middle'>
        <div className='middle-left'>
          save your recording 
          <button className='rec-btn' onClick={handleSaveAudio} disabled={!audioBlob}>Save</button>
        </div>
        <div>
          pss: {pss}
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
