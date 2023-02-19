import React, { useState, useEffect } from 'react';
import { BiMicrophone } from 'react-icons/bi';

const Storymode = ({ vars, onChangeVariables }) => {
  const [value, setValue] = useState('');
  const [newString, setNewString] = useState('Get started with Storymode by clicking and holding down the microphone and reading your story problem');
  const [isListening, setIsListening] = useState(false);

  let initialVelocity = value.search(/drops from rest|/i) !== -1 ? 0 : "";
  let finalVelocityMatch = /hits the ground at[\s-](-?\d+(\.\d+)?)/i.exec(value);
  let finalVelocity = finalVelocityMatch !== null ? -parseFloat(finalVelocityMatch[1]) : "";

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setValue(transcript);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);

    };
  };


  let formattedString = ''
  const handleStop = () => {

    formattedString = value.charAt(0).toUpperCase() + value.slice(1);
    formattedString = formattedString.replace("Apple", "apple");
    formattedString = formattedString.replace(/m per second|meters per second|m per s/gi, 'm/s')

    setNewString(formattedString);


    console.log(value)
    onChangeVariables({
      v1: initialVelocity,
      v2: finalVelocity,
      x1: '',
      x2: '',
      t: '?',
      a: '-9.82',
      units: 'metric',
    });
  };

  // useEffect(() => {
  //   return () => {
  //     if (isListening) {
  //       handleStop();
  //     }
  //   };
  // }, [isListening]);

  return (
    <div className='story'>
      <div className='story-container fc jc-cen ai-cen'>
        <div className='fr' style={{ position: 'absolute', top: '10px', width: '90%' }}>
          <h1 style={{ fontSize: '1.8rem' }}>Storymode</h1>
          <button className='mic' style={{ marginLeft: 'auto' }} onMouseDown={handleListen} onMouseUp={handleStop}>
            <BiMicrophone style={{ transform: 'scale(2)', color: 'beige' }} /><div></div>
          </button>
        </div>
        <div className='story-text' style={{ width: '90%', height: '80%', fontSize: '1.2rem' }}>{newString}</div>
      </div>
    </div>
  );
};
export default Storymode