import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';
import Alert from './Component/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [btn, setbtn] = useState(' dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  function toggle() {
    if (mode === 'light') {
      setMode('dark');
      setbtn("dark mode");
      document.body.style.backgroundColor = 'grey'
      showAlert(" dark mode has been enabled", "success");
      document.title = `React App-dark enabled`;
    }

    else {
      setMode('light');
      setbtn("light mode");

      document.body.style.backgroundColor = 'white'
      showAlert(" light mode has been enabled ", "success");
      document.title = `React App-light enabled`;


    }


  }


  return (
    <>
      <Router>
        <Navbar title="textutils" about="about us" mode={mode} toggle={toggle} btn={btn} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About"
            element={ <About mode={mode} />}>
            </Route>
            <Route exact path="/"
            element={<Textform showAlert={showAlert} heading="Enter your text" mode={mode} />}>
                
              
            </Route>

          </Routes>
        </div>

      </Router>





    </>

  )
}

export default App;
