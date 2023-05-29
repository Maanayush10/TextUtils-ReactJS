import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import Page404 from './components/Page404';

function App() {
  const [mode, setMode] = useState('body-tertiary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'body-tertiary') {
      setMode('dark');
      document.body.style.backgroundColor = "#000304";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('body-tertiary');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar title="Text-Utils" aboutTxt="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm Heading="Enter Your Text" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/*" element={<Page404 mode ={mode}/>} />
          {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
