import React, {useState} from "react";

const TextForm = (props) => {
    const[text, setText] = useState('')

    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
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
       let newText = '';
       setText(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark'? 'white' : 'gray'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview : </h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    );
};
export default TextForm;
