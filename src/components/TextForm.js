import React from "react";

const TextForm = (props) => {
  return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea class="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to Uppercase</button>
    </>
  );
};

export default TextForm;
