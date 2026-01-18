import React, {useRef, useState} from 'react'

export default function TextForm({heading}) {

    const [text, setText] = useState("");
    const textRef = useRef(null);

    // uppercase conversion
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // lowercase conversion
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // copy text
    const handleCopy = () => {
        textRef.current.select();
        let newText = textRef.current.value;
        navigator.clipboard.writeText(newText);
        alert("Text copied!");
        console.log(newText);
    }

    // handle on change
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    
  return (
    <>
    <div className="container">
        <div className='my-3'>
        <h2>{heading}</h2>
        <div className="mb-3">
            <textarea name="text" ref={textRef} id="text" rows={8} value={text} onChange={handleOnChange} className='form-control' placeholder='Enter text here'></textarea><br />
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
        <button className='btn btn-outlined-primary' onClick={handleCopy}>Copy Text</button>
        </div>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.replace(/\n/g, "").split(" ").filter(value => value != "").length} words and {text.trim().length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
