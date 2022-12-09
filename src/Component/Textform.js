import React,{useState} from 'react'

const Textform=(props)=>{
    const [text,setText]=useState('');

   


    const handleupClick=()=>{

        let newText=text.toUpperCase();
        setText(newText);
        console.log("uppercase is called" + text);
        props.showAlert(" uppercase is called","success");
    }
    const handleinClick=(event)=>{
        console.log("clicked");
        setText(event.target.value);

    }

    const handledownClick=()=>{

        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" lowercase is called","success");

       
    }

    const handleclearClick=()=>{
        setText('');
        props.showAlert(" clearText is called","success");

  
    }

    const handlecopyClick=()=>{
      navigator.clipboard.writeText(text);
       
        props.showAlert(" copytext is called","success");

     
    }

    const handlespaceClick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        props.showAlert(" spaceclick is called","success");

    }


    
    



    return (
  
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleinClick} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button style={{backgroundColor:props.mode==='dark'?'grey':'white',marginLeft:"1rem"}} onClick={handleupClick}>uppercase</button>
        <button style={{backgroundColor:props.mode==='dark'?'grey':'white',marginLeft:"1rem"}} onClick={handledownClick}>lowercase</button>
        <button style={{backgroundColor:props.mode==='dark'?'grey':'white',marginLeft:"1rem"}}  onClick={handleclearClick}>clearText</button>
        <button style={{backgroundColor:props.mode==='dark'?'grey':'white',marginLeft:"1rem"}}  onClick={handlecopyClick}>copytext</button>
        <button style={{backgroundColor:props.mode==='dark'?'grey':'white',marginLeft:"1rem"}}  onClick={handlespaceClick}>Removeextraspace</button>
        </div>
       



        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h1>preview</h1>
            <p>{text}</p>
        </div>



        </>
    )
    
 
}
export default Textform;