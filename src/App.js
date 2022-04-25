import React from 'react';
import './App.css';
import AfterRegister from './components/AfterRegister';
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Dashboard from './components/Dashboard';
import DisplayTable from './components/DisplayTable';
import Homepage from './components/Homepage';
// import highstock from './components/highstock';
import DataTable from './components/DataTable';
// import { Highstock } from 'react-highstock/src/Highstock';


function App() {
  return (
  
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/redirect" element={<AfterRegister/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/table" element={<DisplayTable/>}/>
          {/* <Route path="/stock" element={<highstock/>}/> */}
          <Route path="/datatable" element={<DataTable/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
