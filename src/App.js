import React from 'react';
import './App.css';
import AfterRegister from './components/AfterRegister';
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import DataParse from './components/DataParse';

function App() {
  return (
  
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/redirect" element={<AfterRegister/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<DataParse/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
