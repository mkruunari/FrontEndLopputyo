import { useState } from "react";

const Note = ({ noteData }) => {
    return (
        <>
            <li className="linkit">{noteData.course.name}: {noteData.text}</li>
        </>
    );
};

const SavedNotes = ({courses, data, handleClick}) => {
    
    return (
        <>
        <h1>Saved Notes</h1>
        <button onClick={() => handleClick(0)}  >Back to main menu</button>
        <br />
        <div>
            <select>
            {courses.map((r, i) => (
            <option key={i}>{r}</option>
             ))}
            </select>
            <ul>
                {data.map((r, i) => (
                    <Note noteData={r} key={i}></Note>
                ))}
            </ul>
            
           
                {/* <button onClick={() => {console.log(courses)}}>debug</button> */}
                <button onClick={() => {console.log(data)}}>DATA</button>
                
        </div>
 
   
        </>
    )

}

export default SavedNotes;