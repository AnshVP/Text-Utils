import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const upperCase = () => {
        setText(text.toUpperCase())
    }
    const lowerCase = () => {
        setText(text.toLowerCase())
    }
    const changeText = (event) => {
        setText(event.target.value)
    }
    const invertCase = () => {
        let str = ""
        for (var i of text) {
            if (i === i.toLowerCase()) {
                str += i.toUpperCase()
            }
            else if (i === i.toUpperCase()) {
                str += i.toLowerCase()
            }
        }
        setText(str)
    }
    const removeSpaces = () => {
        setText(text.split(' ').join(''))
    }

    const removeExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '))
    }

    const copy = () => {
        var copyText = document.getElementById("textArea")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
    }
    return (
        <>
            <div className
                ="form-group container">
                <label htmlFor="exampleFormControlTextarea1" style={{ fontSize: "30px", padding: "5px" }}><h2>Enter Text Here</h2></label>
                <textarea className
                    ="form-control" id="textArea" rows="10" onChange={changeText} value={text} style={props.theme.textArea}></textarea>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={upperCase}>UPPERCASE</button>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={lowerCase}>lowercase</button>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={invertCase}>InVeRTcAsE</button>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={removeSpaces}>Remove Spaces</button>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className
                    ={`btn ${props.theme.button[0]} my-3 mx-2 operation`} style={props.theme.button[1]} onClick={copy}>Copy</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <div>{text.length === 0 ? "Empty Textarea" : text.split(/[ \n]+/).join('').length + " characters and " + ((text === " " || text === "\n") ? setText("") : (text.split(/[ \n]+/).length - 1)) + " words"}</div>
                <div>{(text.split('/[ \n]+/').join('').length / 250 * 60).toString().slice(0, 5)} sec read time</div>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <textarea className
                ="form-control" id="textArea" rows="10" onChange={changeText} value={text} style={props.theme.textArea}></textarea>
                {/* <pre style={{ border: "2px solid rgb(152, 152, 152)", backgroundColor: "rgb(162, 162, 162)", padding: "4px" }}>{text.length > 0 ? text : "Enter Text to Preview"}</pre> */}
            </div>
        </>
    )
}
