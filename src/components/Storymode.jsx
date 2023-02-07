import React, {useState, useEffect} from 'react'
import {useSpeechRecognition} from 'react-speech-kit'
import {BiMicrophone} from 'react-icons/bi'

const Storymode = ({vars, onChangeVariables}) => {
  const [value, setValue] = useState('');
  const [newString, setNewString] = useState('Get started with Storymode by clicking and holding down the microphone and reading your story problem')

  let initialVelocity = value.search(/drops from rest|/i) !== -1 ? 0 : "";
  // if (initialVelocity === '') {
  //   let initialVelocityMatch = /thrown up at|upwards|increasing[\s-](-?\d+(\.\d+)?)/i.exec(value);
  //   initialVelocity = initialVelocityMatch !== null ? parseFloat(initialVelocityMatch[1]) : '';
  // }
  let finalVelocityMatch = /hits the ground at[\s-](-?\d+(\.\d+)?)/i.exec(value);
let finalVelocity = finalVelocityMatch !== null ? -parseFloat(finalVelocityMatch[1]) : "";


  console.log(initialVelocity, finalVelocity)
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);


    }
  })
  let formattedString = ''
  const reformatString = () => {

    formattedString = value.charAt(0).toUpperCase() + value.slice(1);
    formattedString = formattedString.replace("Apple", "apple");
    formattedString = formattedString.replace(/m per second|meters per second|m per s/gi, 'm/s')
    console.log('in mouseup function')
    stop
    setNewString(formattedString)

    onChangeVariables({
      v1: initialVelocity,
      v2: finalVelocity,
      x1: '',
      x2: '',
      t: '?',
      a: '-9.82',
      units: 'metric'
    })
  }

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);






  console.log('check formatted String', formattedString)
  return (
    <div className='story'>
      <div className='story-container fc jc-cen ai-cen'>
        <div className='fr' style={{position: 'absolute', top: '10px', width: '90%'}}>
          <h1 style={{fontSize: '1.8rem'}}>Storymode</h1>
        <button className='mic' style={{marginLeft: 'auto'}} onMouseDown={listen} onMouseUp={reformatString}><BiMicrophone style={{transform: 'scale(2)', color: 'beige'}} /><div></div></button>
        </div>
        <div className='story-text' style={{width: '90%', height: '80%', fontSize: '1.2rem'}}>{newString}</div>

      </div>
    </div>
  )
}

export default Storymode