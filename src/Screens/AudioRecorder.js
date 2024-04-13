import React, { useState, useRef } from 'react';
import './AudioRecorder.css'; // Import the CSS file

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

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
    <div className="record-container">
      <div className='right-drawer'>
        <button onClick={recording ? handleStopRecording : handleStartRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button onClick={handlePlayAudio} disabled={!audioBlob}>Play</button>
        <button onClick={handleSaveAudio} disabled={!audioBlob}>Save</button>
        <button onClick={handleDeleteAudio} disabled={!audioBlob}>Delete</button>
        <button>Calculate PSS</button>
        <audio ref={audioRef} controls />
      </div>
    </div>
  );
};

export default AudioRecorder;
