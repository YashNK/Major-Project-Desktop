import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Login from './Screens/Login';
import NavBar from './Components/NavBar';
import SignUp from './Screens/SignUp';
import { createContext, useState } from 'react';
import AudioRecorder from './Screens/AudioRecorder';

export const authContext = createContext();

function App() {
  const [authState, setAuthState] = useState(localStorage.getItem('authenticated'));
  return (
    <>
    <authContext.Provider value={[authState, setAuthState]}>
    <BrowserRouter forceRefresh={true}>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/record" element={<AudioRecorder/>}/>
      </Routes>
    </BrowserRouter>
    </authContext.Provider>
    </>
  );
}

export default App;
