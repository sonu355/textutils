import React, {useState} from "react";

const TextForm = (props) => {
    const[text, setText] = useState('')

    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (e) => {
        // console.log("onchnage")
        setText(e.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleClearText = () => {
        var text = document.getElementById('myBox').value
        text.remove()
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview : </h2>
                <p>{text}</p>
            </div>
        </>
    );
};

export default TextForm;
