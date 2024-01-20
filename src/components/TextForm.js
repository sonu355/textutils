import React, {useState} from "react";

const TextForm = (props) => {
    const[text, setText] = useState('Set text here')

    const handleUpClick = () => {
        console.log("uppercase is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (e) => {
        console.log("onchnage")
        setText(e.target.value)
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </>
    );
};

export default TextForm;
