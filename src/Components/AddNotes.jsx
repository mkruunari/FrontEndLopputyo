const AddNotes = ({courses, data, handleClick}) => {
    return (
        <>
        <h1>Add Notes</h1>
        <button onClick={() => handleClick(0)}  >Back to main menu</button>
        <br />
        <div>
            Course:
            {/* tääpitäs ol dropdown */}
            <input type="text" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="button" value="Save" />
      
        
        </>
    )

}

export default AddNotes;