import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert("dark mode enabled successfully", "success")
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      }, 2000)
      setInterval(() => {
        document.title = 'Install Textutil Now'
      }, 1500)
    } else {
      setMode('light')
      showAlert("Light mode enabled successfully", "success")
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/' element={ <TextForm mode={mode} showAlert={showAlert}  heading="Enter Your Text To Analyze"/>}/>            
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
