import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
   toast.error('error');
   toast.success('success');

   const addColor = (color) => {
    try{
        const newColors = new Values(color).all(10);
    }catch(error){ 
      toast.error(error.message);
    } 
    console.log(color);
   }

  return (
    <div className="App">
     <Form addColor={addColor} />
     <ColorList colors={colors} />
     <ToastContainer position='top-center' />
    </div>
  );
};

export default App;
