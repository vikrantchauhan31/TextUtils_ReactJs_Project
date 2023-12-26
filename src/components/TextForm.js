import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick = ()=>{
       //console.log("Uppercase was clicked")
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to Upper","success");
    }

    const handelLoClick = ()=>{
      //console.log("Uppercase was clicked")
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lower","success");
   }

   const handelClear = ()=>{
    let newText = ("")
    setText(newText)
    props.showAlert("Text cleared","success");
   }
   const handelCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard","success");
   }

   const handelExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed","success");
   }

    const handelOnChange = (event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor :  props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handelClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handelExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters in your text</p>
      <p>{0.008*text.split(" ").length} minutes to read on average</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to analyze"}</p>
    </div>
    </>
  )
}
