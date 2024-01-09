import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Confirmation, Home } from './views';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default App;
