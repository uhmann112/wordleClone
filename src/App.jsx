import { useState } from 'react'
import './App.css'

import GameBoard from './components/GameBoard'


function App() {


  return (
    <>
      <h1 className="text-9xl text-neutral-100 font-bold underline  text-center">Wordle</h1>
      <GameBoard />

    </>
  )
}

export default App
