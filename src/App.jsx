import React, { useState } from 'react'
import Navigator from './Navigator';
import Footer from './Footer';
import CreatNote from './CreatNote';
import Note from './Note';



const App = () => {

    let allNotes = localStorage.getItem('notes')
    if (allNotes== null){
        allNotes =[]
    }else{
        allNotes = JSON.parse(allNotes)
    }
    const [showNote, setShowNote] = useState(allNotes)

    let addNote = (receivedData) => {
        setShowNote((prevData) => {
            return allNotes = [
                ...prevData, receivedData
            ]
        })
        localStorage.setItem('notes', JSON.stringify(allNotes))
    }

    let onDelete = (id)=>{
     setShowNote((prevData)=>{
         console.log(prevData)
         console.log(id);
         let remainItems = prevData.filter((elem, index)=> id !== index)
         console.log(remainItems);
         return allNotes = remainItems
         
        })
        localStorage.setItem('notes', JSON.stringify(allNotes))
    }
    return (
        <>
            <Navigator />
            <CreatNote addNote={addNote} />
            <div className="cardContainer">
                {
                    showNote.map((val, index)=>{
                        return <Note 
                            key = {index}
                            id = {index}
                            title = {val.title}
                            content= {val.content}
                            deleteItem = {onDelete}
                            />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default App;
