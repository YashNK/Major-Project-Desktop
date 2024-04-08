import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Login from './Screens/Login';
import NavBar from './Components/NavBar';
import Dashboard from './Screens/Dashboard';

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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
