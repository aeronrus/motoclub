import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Home from './pages/Home/Home';
import { Technics } from './pages/Technics/Technics';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import RequestRent from './pages/RequestRent/RequestRent';
import Sales from './pages/Sales/Sales';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/technics" element={<Technics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request-rent" element={<RequestRent />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
