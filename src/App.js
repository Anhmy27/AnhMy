import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NhaThuoc from './NhaThuoc';
import Home from './Home';
import MuaThuoc from './MuaThuoc';
import Xong from './Xong';
import Tintuc from './Tintuc';
import Admin from './Admin';
import Updatethuoc from './Updatethuoc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/nhathuoc" element={<NhaThuoc />} /> 
        <Route path="/muathuoc" element={<MuaThuoc />} /> 
        <Route path="/xong" element={<Xong />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/updatethuoc" element={<Updatethuoc />} />
      </Routes>
    </Router>
  );
}

export default App;
