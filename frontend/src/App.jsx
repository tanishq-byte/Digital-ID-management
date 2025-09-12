import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Routerz_Hehe, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Routerz_Hehe>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        
      </Routes>
    </Routerz_Hehe>
  )
}

export default App
