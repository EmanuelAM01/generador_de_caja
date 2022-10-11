import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

function App() {
  
  const [color, setColor]=useState("")
  const [allColors, setAllColors] =useState([])

  const changeColor = (color) =>{
    setColor(color);
    setAllColors([...allColors, color]);
  }
  return (
    <div className="App">
    <Form changeColor={changeColor}></Form>
    <Result allColors={allColors}/>
    </div>
  );
}

export default App;
