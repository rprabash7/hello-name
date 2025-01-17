import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1>Hello Name Application</h1>
      <input
        type="text"
        placeholder="Mee peru type cheyyandi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name ? `Hello, ${name}!` : 'Mee peru type cheyyandi!'}</h2>
    </div>
  );
}

export default App;
