import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Login from './Screens/Login';
import NavBar from './Components/NavBar';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <>
    <BrowserRouter forceRefresh={true}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
