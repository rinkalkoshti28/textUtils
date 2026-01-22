import React, {useRef, useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    // const textRef = useRef(null);
    // const [mode, setMode] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Dark mode")

    // const changeMode = () => {
    //     if(mode.color === 'black') {
    //         setMode({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //         setBtnText("Light mode");
    //     } else {
    //         setMode({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setBtnText("Dark mode");
    //     }
    // }

    // uppercase conversion
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        if(newText === "") {
            props.showAlert("Please enter something", "danger");
        } else {
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        }
    }

    // lowercase conversion
    const handleloClick = () => {
        let newText = text.toLowerCase();
        if(newText === "") {
            props.showAlert("Please enter something", "danger");
        } else {
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        }
    }

    // copy text
    const handleCopy = () => {
        let newText = document.getElementById("text");
        newText.select();
        if(newText.value === "") {
            props.showAlert("Please enter something", "danger");
        } else {
            navigator.clipboard.writeText(newText.value);
            // alert("Copied!!");
            props.showAlert("Copied to clipboard", "success");
        }   
        
    }

    // clear text
    const handleClear = () => {
        if(text === "") {
            props.showAlert("Please enter something", "danger");
        } else {
            setText("");
            props.showAlert("text is cleared", "success");
        }
    }

    // find and replace function 
    const findAndReplace = () => {
        let text = document.getElementById("text");
        if(text.value === "") {
             alert("Please write something");
        } else {
            let find = prompt("Enter which word to find");
            let replace = prompt("Enter word to replace with");
            let newText = text.value.replace(new RegExp(find, "gi"), replace);
            // console.log(newText);
            setText(newText);
        }
        props.showAlert("Words are replaced", "success");
    }

    // handle on change
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'#eee':'black'}}>
        <div className='my-3'>
        <div className="d-flex flex-row justify-content-between mb-3">
            <h2>{props.heading}</h2>
            <div className='d-flex flex-row gap-2 align-items-center'>
                {/* <button className='btn btn-primary' onClick={props.colorfulBg ? props.colorfulbtn : "blue"}>Colorful background</button> */}
                <div className={`form-check form-switch ${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                </div>
            </div>
            {/* <button className='btn btn-dark py-0' onClick={props.changeMode}>Dark mode</button> */}
        </div>
        <div className="mb-3">
            <textarea name="text" id="text" rows={8} value={text} onChange={handleOnChange} 
            className='form-control' 
            placeholder='Enter text here'
            style={{backgroundColor : props.mode==='dark'?'#272727':'white', color: props.mode==='dark'?'#eee':'black'}}></textarea><br />
        </div>
        <button className='btn btn-primary me-2 mt-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary me-2 mt-2' onClick={handleloClick}>Convert to Lowercase</button>
        <button className='btn btn-primary me-2 mt-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary me-2 mt-2' onClick={findAndReplace}>Find and Replace</button>
        <button className='btn btn-primary me-2 mt-2' onClick={handleClear}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'#eee':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.replace(/\n/g, "").split(" ").filter(value => value != "").length} words and {text.trim().length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in the text box to preview it here"}</p>
    </div>
    </>
  )
}