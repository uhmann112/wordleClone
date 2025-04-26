import React from 'react'
import { useState,useEffect } from 'react';

const GameBoard = () => {
    const guessCount = 6;
    const solution = "hello";
    const solutionChars = [...solution];
    const [currentGuess,setCurrentGuess]=useState()
    const [currentGuessArray, setCurrentGuessArray] = useState(Array(solutionChars.length).fill(''))

    


    useEffect(() => {
      // Add listener
      window.addEventListener('keydown', handleKeydown)
      
      // Cleanup (remove listener when component unmounts)
      return () => window.removeEventListener('keydown', handleKeydown)
    }, []) // Empty array means run once when component mounts


    function handleKeydown(event){
      const inputChar = event.key
      const newArray = [...currentGuessArray]
      const emptyIndex = newArray.findIndex(letter => letter === '');

      newArray[emptyIndex] = inputChar

      setCurrentGuessArray(newArray)
    }
  return (
    <div className=' my-12 flex flex-col gap-2 items-center justify-center' >
      {Array(guessCount).fill().map((_, i) => (
        <div key={i} className='flex flex-row gap-2 items-center justify-center'>
          {solutionChars.map((_,j )=>(
            <div key={j} className='w-25 h-25 bg-fuchsia-500 flex justify-center items-center' >{currentGuessArray[j]}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default GameBoard