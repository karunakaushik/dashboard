import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routerpage from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routerpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
