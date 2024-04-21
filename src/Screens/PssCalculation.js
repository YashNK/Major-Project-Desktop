// import React, { useState, useRef, useContext } from 'react';
// import './PssCal.css';
// import axios from 'axios';
// import './AudioRecorder.css'; // Import the CSS file
// import { authContext } from '../App';
// import { useNavigate } from 'react-router-dom';
// import {MediaRecorder, register} from 'extendable-media-recorder';
// import {connect} from 'extendable-media-recorder-wav-encoder';

// await register(await connect());

// const PssCalculation = () => {

//   const [recording, setRecording] = useState(false);
//   const [play, setPlay] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const audioRef = useRef(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [authState, setAuthState] = useContext(authContext);
//   const navigate = useNavigate();


//   const [passage, setPassage] = useState(
//     "The sun shone brightly, casting a warm glow over the small town. Children played in the park, their laughter echoing through the air. The park was a favorite spot for families, offering a place to relax and enjoy the outdoors. As the day progressed, the park became more crowded, with people gathering to enjoy the beautiful weather. The sound of children's voices filled the air, punctuated by the occasional 'um' or 'uh' as they tried to find the right words. The park was a place where everyone felt welcome, a place where friendships were made and memories were created. Despite the noise and activity, the park remained a peaceful oasis in the heart of the town"
//   );

//   const handleStartRecording = async () => {


//     if (!navigator.mediaDevices) {
//       alert('Audio recording is not supported on this browser.');
//       return;
//     }

//     const constraints = {
//       audio: {
//         sampleRate: 16000, // Set the desired sampling rate to 16000 Hz
//         echoCancellation: true,
//       },
//     };

//     navigator.mediaDevices.getUserMedia(constraints)
//       .then((stream) => {
//         const recorder = new MediaRecorder(stream, {
//           mimeType: 'audio/wav',
//         });
//         const chunks = [];

//         recorder.ondataavailable = (e) => {
//           chunks.push(e.data);
//         };

//         recorder.onstop = () => {
//           const blob = new Blob(chunks, { type: 'audio/wav' });
//           setAudioBlob(blob);
//         };

//         recorder.start();
//         setMediaRecorder(recorder);
//         setRecording(true);
//       })
//       .catch((err) => {
//         console.error('Error accessing microphone:', err);
//         alert('Error accessing microphone. Please check your device settings.');
//       });
//   };

//   const handleStopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//       setRecording(false);
//     }
//   };

//   const handlePlayAudio = () => {
//     if (audioBlob) {
//       const audioUrl = URL.createObjectURL(audioBlob);
//       audioRef.current.src = audioUrl;
//       audioRef.current.play();
//       setPlay(true);
//     }
//   };



  // const calculatePSS = () => {
  //   const audioData = new FormData();
  //   // audioData.append('audio', audioBlob, 'audio.wav');
  //   console.log(audioData);
  //   axios.post("http://127.0.0.1:8001/api/interjection",audioData).then(response => {
  //     console.log(response)
  //   }).catch(error => {
  //     console.error('Error:', error);
  //   });

  //   axios.post("http://127.0.0.1:8002/api/repetition",audioData).then(response => {
  //     console.log(response)
  //   }).catch(error => {
  //     console.error('Error:', error);
  //   });

  //   axios.post("http://127.0.0.1:8003/api/prolongation",audioData).then(response => {
  //     console.log(response)
  //   }).catch(error => {
  //     console.error('Error:', error);
  //   });
  // }

//   return (
//     <div>
//       {/* <div>
//         <textarea
//           className="passage-textbox"
//           readOnly
//         />
//         <button onClick={() => console.log('Start reading')}>Start Reading</button>
//       </div> */}
//       <h3>
//         Instruction to calculatePSS: bla bla bla bla 
//       </h3>

//       <div>
//       The sun shone brightly, casting a warm glow over the small town. 
//       Children played in the park, their laughter echoing through the air.
//       The park was a favorite spot for families, offering a place to relax and enjoy the outdoors.
//       As the day progressed, the park became more crowded, with people gathering to enjoy the beautiful weather.
//       The sound of children's voices filled the air, punctuated by the occasional 'um' or 'uh' as they tried to find the right words.
//       The park was a place where everyone felt welcome, a place where friendships were made and memories were created.
//       Despite the noise and activity, the park remained a peaceful oasis in the heart of the town
//       </div>
//       <br/>
//       <br/>
//       <button onClick={() => handleStartRecording()}>Start Recording</button>
//       <button onClick={() => handleStopRecording()}>Stop Recording</button>
//       <button onClick={() => handlePlayAudio()}>Play Recording</button>
//       <button onClick={() => calculatePSS()}>Calculate PSS</button>
//     </div>
//   );
// };

// export default PssCalculation;
import React from 'react'
import './PssCal.css';

const PssCalculation = () => {
  return (
    <div className='pss-container'>
      hiiii
    </div>
  )
}

export default PssCalculation
