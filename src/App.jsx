import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';


function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));


  return (
    <div className="App">
     <Form />
     <ColorList colors={colors} />
    </div>
  );
};

export default App;
