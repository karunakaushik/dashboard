import React, { useState } from 'react'
import './notepad.css'


const Notepad = () => {

    const [inputlist, setinputlist] = useState("");
    const [notes, setnotes] = useState([]);

    const addNote = (event) => {
        setinputlist(event.target.value);
    };

    const listNote = () => {
        setnotes((oldenotes) => {
            return [...oldenotes, inputlist];
        });
        setinputlist(' ');
    }
        return(
            <div className="notepadbox">
                <p className="heading">Notepad</p>
                <br />

                <div>
                    <div className= "noteslist">Title &nbsp;<li> Lorem ipsum dolor sit am...</li></div>
                    <div className= "noteslist">Title &nbsp;<li> Lorem ipsum dolor sit am...</li></div>
                    <div className= "noteslist">Title &nbsp;<li> Lorem ipsum dolor sit am...</li></div>
                    <div className= "noteslist">Title &nbsp;<li> Lorem ipsum dolor sit am...</li></div>
                    <div className= "noteslist">Title &nbsp;<li> Lorem ipsum dolor sit am...</li></div>
                    
                  
                    {notes.map( (notesval) => {
                        return <div className= "noteslist">Title &nbsp;<li>{notesval}</li> <br /></div>
                    })}
                </div>
                <div className="inputdivboxnote">
                <label> Title </label>
                <input className="inputbox" type="text" placeholder="add your next work list" value={inputlist} onChange={addNote} />
                <button className="addbtn" onClick={listNote}> + </button>
                </div>

                
            </div>
        )
    
}
export default Notepad;