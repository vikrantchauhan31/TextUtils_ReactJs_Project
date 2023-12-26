
import React,{ useState }  from 'react'; 
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggelMode = ()=>{
       if(mode === 'light')
       {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
       }
       else 
       {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
       }
  }
  
  return (
    <>
 
    <Navbar title = "TestUtils" mode={mode} toggelMode={toggelMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
            
      {/*<About />*/}
            

      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 

      
      </div>
  
    </>
  );
}

export default App;
