import React from 'react'
import { useState } from 'react';

const Form = () => {
   const [color, setColor] = useState('');
   const handleSubmit = (e) => {

   };

       return (
    <div className='container'>
     <h4>Color generator</h4>
     <form className="color-form" onSubmit={handleSubmit}>
       <label>Input Color here:</label>
       <input type="text" name='color' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
       <button className='btn' type='submit' style={{ background: color }}>submit</button>
     </form>
    </div>
  );
  };



export default Form;