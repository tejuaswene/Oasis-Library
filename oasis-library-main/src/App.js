import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Category1 from './components/Category1';
import Category2 from './components/Category2';
import Category3 from './components/Category3';
import Category4 from './components/Category4';
import Category5 from './components/Category5';
import Audiobook from './components/Audiobook';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category1" element={<Category1 />} />
        <Route path="/Category2" element={<Category2 />} />
        <Route path="/Category3" element={<Category3 />} />
        <Route path="/Category4" element={<Category4 />} />
        <Route path="/Category5" element={<Category5 />} />
        <Route path="/Audiobook" element={<Audiobook />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Conatct" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
