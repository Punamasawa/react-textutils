import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked on handle up");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowClick = () => {
    console.log("Clicked on handle up");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClrClick = () => {
    console.log("Clicked on handle up");
    const newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleOnChange = (event) => {
    console.log("on changed clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
