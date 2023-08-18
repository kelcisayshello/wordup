import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import TextBox from './components/TextBox'
import React, { useState, useEffect } from 'react';
import './App.scss'

export default function App() {

  const [text, setText] = React.useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event: any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });

    setWordCount(wordCount);
    setCharCount(text.length);
  }, [text]);

  let btnClear: HTMLButtonElement = document.getElementById("clearBTN") as HTMLButtonElement;
  if (btnClear) {
    btnClear.onclick = function () {
      setWordCount(0);
      setCharCount(0);
    }
  }

  return (
    <>
      <h1 className="title-app">Word<span>Up</span></h1>

      <Toolbar words={wordCount} chars={charCount} />
      <TextBox onchange={changeHandler} />
      <Footer />
    </>
  )
}