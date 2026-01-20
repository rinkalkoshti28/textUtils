import { useState } from 'react'
import TextForm from './TextForm.jsx'

function App() {

  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272727";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    <>
      <TextForm heading={"Enter text to analyze below"} mode={mode} toggleMode={changeMode} />
      {/* <About/> */}
    </>
  )
}

export default App
