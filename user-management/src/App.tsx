import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './container/Home';

const App = () => {
  return (
      <div>
          <Header />
          <div className="app-body">
            <Home/>
          </div>
      </div>
  );
}

export default App;
