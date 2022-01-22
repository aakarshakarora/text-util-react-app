import React, {useState} from "react";

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    function ToUpperCase() {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    function handleOnChange(event) {
        setText(event.target.value)
        console.log(event.target.value)

    }

    function ToLowerCase() {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    function ToSentenceCase() {
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText)
        props.showAlert("Converted to SentenceCase", "success")
    }

    function ToClearText() {
        setText("")
        props.showAlert("Text Cleared", "danger")
    }

    function copyText() {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }

    return (
        <>
            <div className='container' style={{color: props.mode.toString() === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{
                        backgroundColor: props.mode.toString() === 'light' ? 'white' : '#042743',
                        color: props.mode.toString() === 'light' ? 'black' : 'white'
                    }}
                              className='form-control' id='myBox' rows="10"
                              value={text} onChange={handleOnChange}/>
                </div>
                <div className='container'>

                    <button className='btn btn-primary' onClick={ToUpperCase}>Convert to UpperCase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={ToLowerCase}>Convert to LowerCase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={ToSentenceCase}>Convert to TitleCase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={copyText}>Copy Text</button>
                    <button className='btn btn btn-danger mx-2 my-2' onClick={ToClearText}>Clear Text</button>


                </div>
                <div className='container my-5'>
                    <h2>Summary</h2>
                    <p>{text.split(/\s+/).filter((element) => {
                        return element.length !== 0
                    }).length} words and {text.length} characters</p>

                    <p>{text.length !== 0 ? 0.08 * text.split(" ").length : 0} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text.length === 0 ? "Nothing to preview" : text}</p>
                </div>

            </div>
        </>

    );

}
