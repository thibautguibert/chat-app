import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        name="Carl Sims"
        avatar="https://randomuser.me/api/portraits/men/31.jpg"
        online />
      <Contact
        name="Eileen Rogers"
        avatar="https://randomuser.me/api/portraits/women/11.jpg" />
      <Contact
        name="Anita Burton"
        avatar="https://randomuser.me/api/portraits/women/84.jpg"
        online />
    </div>
  );
}

export default App;
