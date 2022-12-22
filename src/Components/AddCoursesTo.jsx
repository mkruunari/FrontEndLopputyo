const AddCoursesTo = ({courses, data, handleClick}) => {
    return (
        <>
        <h1>Add course</h1>
        <button onClick={() => handleClick(0)}  >Back to main menu</button>
        <br />
    
        <input type="text" name="" id="kurssiteksti" />
        <input type="button" value="Save" />
        
        </>
    )

}

export default AddCoursesTo;