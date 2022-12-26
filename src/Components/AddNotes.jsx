import { useState, useEffect } from "react";
import SelectDropDown from "./SelectDropDown";
const AddNotes = ({courses, data, setData, handleClick, deleteByText}) => {
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);

    // useEffect(() => {
    //     console.log(text);
    //     console.log(notes);
    // }, [text]) 
    // jos joku muuttuu consolis, ni tää printtaa se

    //Timestamppi
    const ReturnTime = () => {
        let timestamp = new Date();
        timestamp = timestamp.toISOString().slice(0, -5)
        return timestamp
    }


    const SaveNote = () => {
       let d = {
        id: data.length,
        text: text,
        course: {
            id: 0,
            name: "",
        },
        timestamp: ReturnTime(),
       }
        
        setText("")
        setNotes([...notes, d])
        setData([...data, d]);
    }
   
    return (
        <>
        <h1>Add Notes</h1>
        <button onClick={() => handleClick(0)}  >Back to main menu</button>
        <br />
        <br />
        <div>
        <span className="course">Course:</span>
            
            <SelectDropDown courses={courses}></SelectDropDown>
           
        </div>
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <br />
            <input onClick={() => console.log(SaveNote())} type="button" value="Save" />
        <div>
            {notes.map((r, i) => {
                return  <h2 key={i}>{r.text}</h2>
               
            })}
          
        </div>
        </>
    )
    
}

export default AddNotes;