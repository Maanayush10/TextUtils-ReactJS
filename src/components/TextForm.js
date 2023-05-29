import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here');
    // setText("NewText")
    const handleUpClick = () => {
        // console.log('Upper case was handled.'+ text)
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" ,"success")
    }
    const handleLoClick = () => {
        // console.log('Lower case was handled.'+ text)
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" ,"success")
    }

    const handleonChange = (event) => {
        // console.log('Onchange was handled')
        setText(event.target.value)
    }

    const handleClear =()=>{
        setText("")
    }
    return (
        <>
        <div className='container' style={{color : props.mode ==='dark' ? 'white':'black'}}>
            <h1 className='text-center'>{props.Heading}</h1>
            <div className="mb-3 mx-4">
                <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Conver to Lowercase</button>
            <button className='btn btn-danger mx-1' onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-5" style={{color : props.mode ==='dark' ? 'white':'black'}}>
            <h2>Text summmary:</h2>
            <p>{text.split(" ").length} words, {text.length} charecters.</p>
            <p>{0.008*text.split(" ").length} Minute read.</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter Something in the above textbox to preview it.'}</p>
        </div>
        </>
    )
}
