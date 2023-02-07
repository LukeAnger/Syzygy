import React, { useState, useEffect, useRef} from 'react';
import {eq1, eq2, eq3, quad} from './equations.js'
import Draggable from 'react-draggable';

const Notepad = ({vars}) => {
  const [style, setStyle] = useState({position: 'absolute', top: '0', left: '0', width: '400px', height: '600px'})
  const [enlarge, setEnlarge] = useState(0)
  const [big, setBig] = useState(false)
  const [notepadAnimation, setNotepadAnimation] = useState(0)

  const resetEnlarge = () => {setEnlarge(0)}
  const handleClick = () => {
    if (notepadAnimation !== 1) {
      setNotepadAnimation(1)
    } else {
      setNotepadAnimation(2)
    }

  }


  return (
    <Draggable>
    <div
    id='notepad'
    className='notepad'
    style={style}
    animate={notepadAnimation}
     >
      <div className='notepad-head' onClick={handleClick} >
        <button className='notepad-close' onClick={() => handleClick}>
          <div className='npclose1'></div>
          <div className='npclose2'></div>
        </button>
      </div>
      <form className='notepad-form'>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
        <input className='note-input'></input>
      </form>
    </div>
    </Draggable>
  )
}

export default Notepad