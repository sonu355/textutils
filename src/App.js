import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';

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
      console.log("Hello")
    } else {
      setMode('light')
      showAlert("Light mode enabled successfully", "success")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <TextForm mode={mode} showAlert={showAlert}  heading="Enter Your Text To Analyze"/>
        {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;
