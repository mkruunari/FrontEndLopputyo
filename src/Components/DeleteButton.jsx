const DeleteButton = ({noteData, deleteByText}) =>{
    return(
        <div>
            <p role="button"
                tabIndex={0}
                className="delete-button"
                onKeyDown={()=>deleteByText(noteData.text)}
                onClick={()=> deleteByText(noteData.text)}
            >
                [x]
                
            </p>

        </div>
    );
};

export default DeleteButton;  