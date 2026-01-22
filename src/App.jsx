import { useState } from 'react'
import TextForm from './components/TextForm.jsx'
import Alert from './components/Alert.jsx';
import "./index.css";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const changeMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272727";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  // const colorfulBg = () => {
  //   let r = Math.floor(Math.random() * 100);
  //   let g = Math.floor(Math.random() * 100);
  //   let b = Math.floor(Math.random() * 100);
  //   let color = `rgb(${r}, ${g}, ${b})`;
  //   document.body.style.backgroundColor = color;
  //   return true;
  // }

  // const colorfulbtn = () => {
  //   let r = Math.floor(Math.random() * 56) + 200;
  //   let g = Math.floor(Math.random() * 56) + 200;
  //   let b = Math.floor(Math.random() * 56) + 200;
  //   let opacity = 0.5;
  //   setBtnColor(`rgba(${r}, ${g}, ${b}, ${opacity})`);
  // }
  
  return (
    <>
      <Alert alert={alert} showAlert={showAlert} />
      <TextForm showAlert={showAlert} heading={"Enter text to analyze below"} mode={mode} toggleMode={changeMode} />
      {/* <About/> */}
    </>
  )
}

export default App
