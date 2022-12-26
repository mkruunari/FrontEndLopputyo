import { useState } from "react";
import SelectDropDown from "./SelectDropDown";

const DataNote = ({ noteData }) => {
    return (
        <>
            {/* pääsee syvemmälle datassa pisteellä */}
            <li className="linkit" >{noteData.course.name} (id: {noteData.course.id}):  {noteData.timestamp}
            <span className="note-text">{noteData.text}</span>
            </li>
        </>
    );
};

const SavedNotes = ({courses, data, handleClick}) => {
    
    return (
        <>
        <h1>Saved Notes</h1>
        <button onClick={() => handleClick(0)}  >Back to main menu</button>
        <br />
        <br />
        <div>
            <span className="course">Course:</span>
            <SelectDropDown courses={courses}></SelectDropDown>
           
            <ul>
                {data.map((r, i) => (
                    <DataNote noteData={r} key={i}></DataNote>
                ))}
            </ul>
            
           
                
                {/* <button onClick={() => {console.log(data)}}>DATA TEST btn</button>
                {/* Tämä nappula näyttää consolissa sen, et sinne on ilmestynyt uusi note */}
                
        </div>
 
   
        </>
    )

}

export default SavedNotes;