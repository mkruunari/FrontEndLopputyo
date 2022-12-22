const Buttons = ({ handleClick, count }) => {
    return (
        <>
        <div className="buttons">
            {count === 0 && <a id="btns" onClick={() => handleClick(1)}>Create notes for class</a>}
            {count === 0 && <a id="btns" onClick={() => handleClick(2)}>List notes</a>}
            {count === 0 && <a id="btns" onClick={() => handleClick(3)}>Add courses</a>}
        </div>
       </>
    );
  };
  
  export default Buttons;