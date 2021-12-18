import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    let  deleteNote= ()=>{
        props.deleteItem(props.id)
    }
    return <> 
        <div className='note_card'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button className='deleteBtn' onClick= {deleteNote}>
                <DeleteOutlineIcon className='deleteIcon'/>
            </button>
        </div>
       

        </>
}

export default Note