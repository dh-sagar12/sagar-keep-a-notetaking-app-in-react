import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@material-ui/core/Fab';
import { useState } from 'react';



const CreatNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false);
    

    let inputEvent = (event) => {
        let { value, name } = event.target
        setNote((preVal)=>{
            return {
                ...preVal,
                [name]:value
            }
        })
    }

    let addItemEvent = ()=>{
        if (note.title=="" || note.content==""){
            alert('Please Fill Both Title And Content Before Submitting...')
        }else{

            props.addNote(note)
            setNote({
                title: "",
                content: ""
            })
        }
    }

    let expandIt = ()=>{
        setExpand(true);
    }

    let collapseIt= (event)=>{
       setExpand(false)
    }

    return <>
        <div className='main_note' onDoubleClick={collapseIt}>
            <div className='card'>
                <form>
                  {  expand?<input 
                    type="text" 
                    name='title'
                    value={note.title} 
                    onChange={inputEvent} 
                    placeholder='Title' 
                    autoComplete='off' 
                    required

                    />: null }

                    <textarea 
                    cols="" 
                    rows="" 
                    name='content'
                    value={note.content} 
                    onChange={inputEvent} 
                    placeholder='Write a note...'
                    onClick= {expandIt}
                    />

                  {  expand? <Fab className='buttonAdd' onClick={addItemEvent}>
                        <AddIcon className='addBtn' />
                    </Fab>: null}

                </form>

            </div>

        </div>
    </>
}

export default CreatNote